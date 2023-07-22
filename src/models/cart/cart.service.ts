import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class CartService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly usersService: UsersService,
  ) {}

  async create(createCartDto: CreateCartDto, user_id: number) {
    const user = await this.usersService.findOne(user_id);

    return await this.prismaService.cartItem.create({
      data: {
        ...createCartDto,
        product_variant: {
          connect: {
            id: createCartDto.product_variant,
          },
        },
        cart: {
          connect: {
            id: user.cart.id,
          },
        },
      },
    });
  }

  async findAll(user_id: number) {
    const user = await this.usersService.findOne(user_id);

    return await this.prismaService.cartItem.findMany({
      where: {
        cart_id: user.cart.id,
      },
      include: {
        product_variant: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async findOne(id: number, user_id: number) {
    const user = await this.usersService.findOne(user_id);

    return await this.prismaService.cartItem.findUnique({
      where: {
        id,
        cart_id: user.cart.id,
      },
      include: {
        product_variant: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async update(id: number, updateCartDto: UpdateCartDto, user_id: number) {
    const user = await this.usersService.findOne(user_id);
    const { quantity, customization, customization_name, customization_price } =
      updateCartDto;

    return await this.prismaService.cartItem.update({
      where: {
        id,
        cart_id: user.cart.id,
      },
      data: {
        quantity,
        customization,
        customization_name,
        customization_price,
      },
    });
  }

  async remove(id: number, user_id: number) {
    const user = await this.usersService.findOne(user_id);

    return await this.prismaService.cartItem.delete({
      where: {
        id,
        cart_id: user.cart.id,
      },
    });
  }
}
