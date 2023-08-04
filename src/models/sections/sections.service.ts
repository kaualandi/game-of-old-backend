import { Injectable } from '@nestjs/common';
import {
  NotFoundException,
  BadRequestException,
} from '@nestjs/common/exceptions';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class SectionsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createSectionDto: CreateSectionDto) {
    return this.prismaService.section.create({ data: createSectionDto });
  }

  async findAll(name: string, page: number, page_size: number) {
    if (!page || !page_size) {
      throw new BadRequestException(
        'Especifique a página e o tamanho da página.',
      );
    }

    const pagedResult = await this.prismaService.section.findMany({
      where: { name: { contains: name } },
      include: { categorys: true },
      skip: (page - 1) * page_size,
      take: page_size,
    });

    const count = await this.prismaService.section.count();

    return {
      count,
      results: pagedResult,
      next: count > page * page_size ? true : false,
      previous: page <= 1 ? false : true,
    };
  }

  async findOne(id: number) {
    const filter = await this.prismaService.section.findUnique({
      where: { id },
      include: { categorys: true },
    });

    if (!filter) {
      throw new NotFoundException(`Filtro não encontrado`);
    }

    return filter;
  }

  async update(id: number, updateSectionDto: UpdateSectionDto) {
    await this.findOne(id);

    return this.prismaService.section.update({
      where: { id },
      data: updateSectionDto,
    });
  }

  async remove(id: number) {
    const section = await this.findOne(id);

    if (section.categorys.length > 0) {
      throw new BadRequestException(
        `Existem categorias cadastradas nesta sessão, remova-as antes de deletar a sessão`,
      );
    }

    return this.prismaService.section.delete({ where: { id } });
  }
}
