import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from './../../modules/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategorysService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.prismaService.category.create({ data: createCategoryDto });
  }

  async findAll(name: string, page: number, page_size: number) {
    if (!page || !page_size) {
      throw new NotFoundException(
        'Especifique a página e o tamanho da página.',
      );
    }

    const pagedResult = await this.prismaService.category.findMany({
      include: { _count: true },
      where: {
        name: {
          contains: name,
        },
      },
    });

    const count = await this.prismaService.category.count();

    return {
      count,
      results: pagedResult,
      next: count > page * page_size ? true : false,
      previous: page <= 1 ? false : true,
    };
  }

  async findOne(id: number) {
    const category = await this.prismaService.category.findUnique({
      where: { id },
      include: { filters: true, _count: true },
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
    const category = await this.findOne(id);

    if (category.filters.length > 0) {
      throw new BadRequestException(
        `Existem filtros cadastrados nesta categoria, remova-os antes de deletar a categoria`,
      );
    }
    return this.prismaService.category.delete({ where: { id } });
  }
}
