import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { CreateFilterDto } from './dto/create-filter.dto';
import { UpdateFilterDto } from './dto/update-filter.dto';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class FiltersService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createFilterDto: CreateFilterDto) {
    return this.prismaService.filter.create({ data: createFilterDto });
  }

  findAll(name: string) {
    return this.prismaService.filter.findMany({
      where: { name: { contains: name } },
    });
  }

  async findOne(id: number) {
    const filter = await this.prismaService.filter.findUnique({
      where: { id },
      include: { products: true },
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
