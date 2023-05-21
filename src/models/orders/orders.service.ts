import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    const { order_items, ...order } = createOrderDto;
    const createdOrder = await this.prismaService.order.create({ data: order });

    if (order_items.length > 0) {
      for (const item of order_items) {
        await this.prismaService.orderItem.create({
          data: {
            ...item,
            order_id: createdOrder.id,
          },
        });
      }
    }

    return createdOrder;
  }

  findAll() {
    return this.prismaService.order.findMany({
      include: {
        order_items: true,
        _count: true,
      },
    });
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

    const { order_items, ...order } = updateOrderDto;
    const updatedOrder = await this.prismaService.order.update({
      where: { id },
      data: order,
    });

    if (order_items.length > 0) {
      for (const item of order_items) {
        if (item.id) {
          await this.prismaService.orderItem.update({
            where: { id: item.id },
            data: {
              ...item,
              order_id: updatedOrder.id,
            },
          });
        } else {
          await this.prismaService.orderItem.create({
            data: {
              ...item,
              order_id: updatedOrder.id,
            },
          });
        }
      }
    }

    return updatedOrder;
  }

  async remove(id: number) {
    const order = await this.findOne(id);

    for (const item of order.order_items) {
      await this.prismaService.orderItem.delete({ where: { id: item.id } });
    }

    return this.prismaService.order.delete({ where: { id } });
  }
}
