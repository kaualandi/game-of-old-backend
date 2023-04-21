import { PrismaService } from './../../modules/prisma';
import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.product.findMany();
  }

  findOne(id: number) {
    return this.prismaService.product.findUnique({ where: { id } });
  }

  create(data: Product) {
    return this.prismaService.product.create({ data });
  }

  update(id: number, data: Product) {
    return this.prismaService.product.update({ where: { id }, data });
  }

  delete(id: number) {
    return this.prismaService.product.delete({ where: { id } });
  }
}
