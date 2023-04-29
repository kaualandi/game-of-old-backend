import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './../../modules/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategorysService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.prismaService.category.create({ data: createCategoryDto });
  }

  findAll() {
    return this.prismaService.category.findMany({
      include: { _count: true },
    });
  }

  async findOne(id: number) {
    const category = await this.prismaService.category.findUnique({
      where: { id },
      include: { products: true, _count: { select: { products: true } } },
    });

    if (!category) {
      throw new NotFoundException(`Categoria não encontrada`);
    }

    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    await this.findOne(id);

    return this.prismaService.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prismaService.category.delete({ where: { id } });
  }
}
