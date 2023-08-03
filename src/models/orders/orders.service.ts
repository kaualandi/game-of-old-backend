import { Injectable } from '@nestjs/common';
import {
  NotFoundException,
  BadRequestException,
} from '@nestjs/common/exceptions';
import { PrismaService } from 'src/modules/prisma';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    const {
      order_items,
      card_number,
      card_validity,
      card_holder_name,
      user_id,
      address_id,
      ...order
    } = createOrderDto;
    const createdOrder = await this.prismaService.order.create({
      data: {
        ...order,
        user: { connect: { id: user_id } },
        address: { connect: { id: address_id } },
      },
    });

    if (order_items.length > 0) {
      for (const item of order_items) {
        const productVariant =
          await this.prismaService.productVariant.findUnique({
            where: { id: item.product_variant_id },
            include: { product: true },
          });

        await this.prismaService.product.update({
          where: { id: productVariant.product.id },
          data: {
            sold: productVariant.product.sold + item.quantity,
          },
        });

        await this.prismaService.orderItem.create({
          data: {
            ...item,
            order_id: createdOrder.id,
          },
        });
      }
    }

    return {
      worked: true,
      status: 'PENDING',
      order_id: createdOrder.id,
      qr_code: null,
    };
  }

  async findAll(page: number, page_size: number) {
    if (!page || !page_size) {
      throw new BadRequestException(
        'Especifique a página e o tamanho da página.',
      );
    }

    const pagedResult = await this.prismaService.order.findMany({
      include: {
        order_items: true,
        _count: true,
      },
    });

    const count = await this.prismaService.order.count();

    return {
      count,
      results: pagedResult,
      next: count > page * page_size ? true : false,
      previous: page <= 1 ? false : true,
    };
  }

  async findOne(id: number) {
    const order = await this.prismaService.order.findUnique({
      where: { id },
      include: {
        order_items: true,
        _count: true,
      },
    });

    if (!order) {
      throw new NotFoundException(`Pedido não encontrado`);
    }

    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    await this.findOne(id);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { order_items, ...order } = updateOrderDto;
    const updatedOrder = await this.prismaService.order.update({
      where: { id },
      data: {
        ...order,
      },
    });

    return updatedOrder;
  }

  async remove(id: number) {
    const order = await this.findOne(id);

    for (const item of order.order_items) {
      await this.prismaService.orderItem.delete({ where: { id: item.id } });
    }

    return this.prismaService.order.delete({ where: { id } });
  }

  async cancel(id: number, user_id: number) {
    const order = await this.findOne(id);
    const user = await this.prismaService.user.findUnique({
      where: { id: user_id },
    });

    if (order.user_id !== user_id && !user.is_admin) {
      throw new NotFoundException(`Pedido não encontrado.`);
    }

    if (order.status === 'CANCELLED') {
      throw new NotFoundException(`Pedido já cancelado.`);
    }

    if (order.status.match(/(SENT|DELIVERED)/)) {
      throw new NotFoundException(
        `Impossível cancelar esse pedido no estado atual.`,
      );
    }

    return this.prismaService.order.update({
      where: { id },
      data: {
        status: 'CANCELLED',
      },
    });
  }
}
