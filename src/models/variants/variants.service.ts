import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma';
import { CreateVariantsDto } from './dto/create-variants.dto';
import { UpdateVariantsDto } from './dto/update-variants.dto';

@Injectable()
export class VariantsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createVariantsDto: CreateVariantsDto) {
    return this.prismaService.productVariant.create({
      data: createVariantsDto,
    });
  }

  findAll(name: string) {
    return this.prismaService.productVariant.findMany({
      include: {
        product: true,
      },
      where: {
        name: {
          contains: name,
        },
      },
    });
  }

  async findOne(id: number) {
    const variant = await this.prismaService.productVariant.findUnique({
      where: { id },
      include: { product: true },
    });

    if (!variant) {
      throw new NotFoundException(`Variação não encontrada`);
    }

    return variant;
  }

  async update(id: number, updateVariantsDto: UpdateVariantsDto) {
    await this.findOne(id);

    return this.prismaService.productVariant.update({
      where: { id },
      data: updateVariantsDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prismaService.productVariant.delete({ where: { id } });
  }
}
