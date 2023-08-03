import { Injectable } from '@nestjs/common';
import {
  NotFoundException,
  BadRequestException,
} from '@nestjs/common/exceptions';
import { CreateFilterDto } from './dto/create-filter.dto';
import { UpdateFilterDto } from './dto/update-filter.dto';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class FiltersService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createFilterDto: CreateFilterDto) {
    return this.prismaService.filter.create({ data: createFilterDto });
  }

  async findAll(name: string, page: number, page_size: number) {
    if (!page || !page_size) {
      throw new BadRequestException(
        'Especifique a página e o tamanho da página.',
      );
    }

    const pagedResult = await this.prismaService.filter.findMany({
      where: { name: { contains: name } },
      include: { category: true, products: true },
      skip: (page - 1) * page_size,
      take: page_size,
    });

    const count = await this.prismaService.filter.count();

    return {
      count,
      results: pagedResult,
      next: count > page * page_size ? true : false,
      previous: page <= 1 ? false : true,
    };
  }

  async findOne(id: number) {
    const filter = await this.prismaService.filter.findUnique({
      where: { id },
      include: { category: true, products: true },
    });

    if (!filter) {
      throw new NotFoundException(`Filtro não encontrado`);
    }

    return filter;
  }

  async update(id: number, updateFilterDto: UpdateFilterDto) {
    await this.findOne(id);

    return this.prismaService.filter.update({
      where: { id },
      data: updateFilterDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return await this.prismaService.filter.delete({ where: { id } });
  }
}
