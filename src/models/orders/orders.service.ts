import { Injectable } from '@nestjs/common';
import {
  NotFoundException,
  BadRequestException,
} from '@nestjs/common/exceptions';
import { PrismaService } from 'src/modules/prisma';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrePriceDto } from './dto/pre-price.dto';
import { CorreiosService } from '../correios/correios.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly correiosService: CorreiosService,
  ) {}

  async create(createOrderDto: CreateOrderDto, user_id: number) {
    console.log('create called');

    const { cart_ids, address_id, total, delivery_method, cupom } =
      createOrderDto;

    const config = await this.prismaService.config.findFirst();
    const items = await this.prismaService.cartItem.findMany({
      where: { id: { in: cart_ids } },
      include: {
        product_variant: {
          include: { product: { include: { images: true } } },
        },
      },
    });

    console.log('items qtd', items.length);

    if (items.length === 0) {
      console.log('Nenhum item encontrado');
      throw new BadRequestException(`Nenhum item encontrado.`);
    }

    let totalWithDiscount = 0;
    let itemsQuantity = 0;

    for (const item of items) {
      const product = item.product_variant.product;
      itemsQuantity += item.quantity;
      const discountPrice =
        product.base_price - (product.base_price * product.discount) / 100;

      totalWithDiscount += discountPrice * item.quantity;
      if (item.customization) {
        const customizationValue = config.customization_fee * item.quantity;
        totalWithDiscount += customizationValue;
      }
    }

    console.log('totalWithDiscount', totalWithDiscount);

    let correios_fee = 0;
    const address = await this.prismaService.address.findUnique({
      where: { id: address_id },
    });

    if (!address) {
      console.log('Endereço não encontrado');

      throw new BadRequestException(
        `Endereço não encontrado. Por favor, tente criar um novo.`,
      );
    }

    if (total < config.delivery_fee || delivery_method === 'sedex') {
      console.log('Frete não grátis');

      const deliveryFeeCep = await this.correiosService.priceDeadLine({
        destination_zip_code: address.zip_code,
        products_quantity: itemsQuantity,
        price: totalWithDiscount,
      });
      correios_fee = deliveryFeeCep[delivery_method].price;
      totalWithDiscount += deliveryFeeCep[delivery_method].price;
    }

    let cupom_status = false;
    let cupom_discount = 0;

    console.log('cupom:', cupom);

    const coupon = cupom
      ? await this.prismaService.coupon.findUnique({
          where: { code: cupom },
          include: { used: true },
        })
      : undefined;

    if (coupon && !coupon.used.find((c) => c.user_id === user_id)) {
      cupom_status = true;
      cupom_discount = (totalWithDiscount * coupon.discount) / 100;
      console.log('cupom_discount', cupom_discount);

      totalWithDiscount -= cupom_discount;
    }

    if (totalWithDiscount !== total) {
      console.log('Valor total não corresponde ao valor real do pedido');

      throw new BadRequestException(
        `O valor total informado (${total}) não corresponde ao valor real do pedido (${totalWithDiscount}). Por favor, volte para o carrinho e refaça a compra.`,
      );
    }

    const createdOrder = await this.prismaService.order.create({
      data: {
        customization_fee: config.customization_fee,
        delivery_fee: config.delivery_fee,
        payment_method: createOrderDto.payment_method,
        subtotal: totalWithDiscount - correios_fee,
        total: totalWithDiscount,
        user: { connect: { id: user_id } },
        address: { connect: { id: address_id } },
        cupom: cupom_status ? { connect: { code: cupom } } : undefined,
      },
    });

    await this.prismaService.usedCoupon.create({
      data: {
        user: { connect: { id: user_id } },
        coupon: { connect: { id: coupon.id } },
      },
    });

    console.log('\n\ncreatedOrder', createdOrder, '\n\n');

    for (const item of items) {
      await this.prismaService.cartItem.delete({ where: { id: item.id } });
      await this.prismaService.orderItem.create({
        data: {
          quantity: item.quantity,
          customization: item.customization,
          product_variant: { connect: { id: item.product_variant_id } },
          order: { connect: { id: createdOrder.id } },
          price: item.product_variant.product.base_price,
          customization_name: item.customization_name,
          customization_number: item.customization_number,
          customization_price: config.customization_fee * item.quantity,
        },
      });
      console.log('carrinho deletado e product order criado');
    }

    console.log('order items criados e fluxo finalizado');

    return {
      worked: true,
      status: 'PENDING',
      order_id: createdOrder.id,
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
        order_items: {
          include: {
            product_variant: {
              include: { product: { include: { images: true } } },
            },
          },
        },
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

    const { cupom, ...rest } = updateOrderDto;

    const updatedOrder = await this.prismaService.order.update({
      where: { id },
      data: {
        ...rest,
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

  async prePrice(prePriceDto: PrePriceDto, user_id: number) {
    console.log(prePriceDto);

    const user = await this.prismaService.user.findUnique({
      where: { id: user_id },
    });
    if (!user) {
      throw new NotFoundException(`Usuário não encontrado.`);
    }

    const config = await this.prismaService.config.findFirst();
    const { items } = prePriceDto;
    if (items.length === 0) {
      throw new BadRequestException(`Nenhum item informado.`);
    }

    const order_items = await this.prismaService.cartItem.findMany({
      where: { id: { in: items } },
      include: {
        product_variant: {
          include: { product: { include: { images: true } } },
        },
      },
    });

    if (order_items.length === 0) {
      throw new BadRequestException(`Nenhum item encontrado.`);
    }

    let totalWithDiscount = 0;
    let totalWithoutDiscount = 0;
    let totalDiscount = 0;
    let totalCustomizations = 0;

    for (const item of order_items) {
      const product = item.product_variant.product;
      const discountPrice =
        product.base_price - (product.base_price * product.discount) / 100;

      totalWithDiscount += discountPrice * item.quantity;
      totalWithoutDiscount += product.base_price * item.quantity;
      totalDiscount += (product.base_price - discountPrice) * item.quantity;
      if (item.customization) {
        const customizationValue = config.customization_fee * item.quantity;
        totalCustomizations += customizationValue;
        totalWithDiscount += customizationValue;
        totalWithoutDiscount += customizationValue;
      }
    }

    let cupom_status = false;
    let cupom_discount = 0;

    const cupom = await this.prismaService.coupon.findUnique({
      where: { code: prePriceDto.cupom },
      include: { used: true },
    });

    if (cupom && !cupom.used.find((c) => c.user_id === user_id)) {
      cupom_status = true;
      cupom_discount = (totalWithDiscount * cupom.discount) / 100;
      totalWithDiscount -= cupom_discount;
    }

    return {
      total_with_discount: totalWithDiscount,
      total_without_discount: totalWithoutDiscount,
      total_customizations: totalCustomizations,
      total_discount: totalDiscount,
      items: order_items,
      cupom_status,
      cupom_discount,
    };
  }
}
