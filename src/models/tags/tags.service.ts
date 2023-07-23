import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class TagsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createTagDto: CreateTagDto) {
    return this.prismaService.tag.create({
      data: { ...createTagDto, config_id: 1 },
    });
  }

  findAll(name: string, page: number, page_size: number) {
    return this.prismaService.tag.findMany({
      where: { name: { contains: name } },
      skip: (page - 1) * page_size,
      take: page_size,
    });
  }

  async findOne(id: number) {
    const tag = await this.prismaService.tag.findUnique({
      where: { id },
    });

    if (!tag) {
      throw new NotFoundException(`Tag não encontrada`);
    }

    return tag;
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    await this.findOne(id);

    return this.prismaService.tag.update({
      where: { id },
      data: updateTagDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prismaService.tag.delete({
      where: { id },
    });
  }
}
