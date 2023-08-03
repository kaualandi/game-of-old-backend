import { Injectable } from '@nestjs/common';
import {
  BadRequestException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class CouponsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCouponDto: CreateCouponDto) {
    const coupon = await this.findByCode(createCouponDto.code);

    if (coupon) {
      throw new NotFoundException('Já existe um cupom com esse código');
    }

    return this.prismaService.coupon.create({
      data: createCouponDto,
    });
  }

  async findAll(name: string, page: number, page_size: number) {
    if (!page || !page_size) {
      throw new BadRequestException(
        'Especifique a página e o tamanho da página.',
      );
    }

    const pagedResult = await this.prismaService.coupon.findMany({
      where: {
        code: {
          contains: name,
        },
      },
      skip: (page - 1) * page_size,
      take: page_size,
    });

    const count = await this.prismaService.coupon.count();

    return {
      count,
      results: pagedResult,
      next: count > page * page_size ? true : false,
      previous: page <= 1 ? false : true,
    };
  }

  async findOne(id: number) {
    const coupon = await this.prismaService.coupon.findUnique({
      where: {
        id,
      },
    });

    if (!coupon) {
      throw new NotFoundException('Cupom não encontrado');
    }

    return coupon;
  }

  async update(id: number, updateCouponDto: UpdateCouponDto) {
    await this.findOne(id);
    const coupon = await this.findByCode(updateCouponDto.code);

    if (coupon && coupon.id !== id) {
      throw new NotFoundException('Já existe um cupom com esse código');
    }

    return this.prismaService.coupon.update({
      where: {
        id,
      },
      data: updateCouponDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prismaService.coupon.delete({
      where: {
        id,
      },
    });
  }

  private async findByCode(code: string) {
    return await this.prismaService.coupon.findUnique({
      where: {
        code,
      },
    });
  }
}
