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
    this.prismaService.section.create({ data: createSectionDto });
  }

  async findAll(name: string, page: number, page_size: number) {
    if (!page || !page_size) {
      throw new BadRequestException(
        'Especifique a página e o tamanho da página.',
      );
    }
  }

  async findOne(id: number) {
    return `This action returns a #${id} section`;
  }

  async update(id: number, updateSectionDto: UpdateSectionDto) {
    return `This action updates a #${id} section`;
  }

  async remove(id: number) {
    return `This action removes a #${id} section`;
  }
}
