import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';

@Injectable()
export class TypesService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createTypeDto: CreateTypeDto) {
    return this.prismaService.type.create({ data: createTypeDto });
  }

  findAll(name: string) {
    return this.prismaService.type.findMany({
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
    const type = await this.prismaService.type.findUnique({ where: { id } });

    if (!type) {
      throw new NotFoundException(`Tipo não encontrado`);
    }

    return type;
  }

  async update(id: number, updateTypeDto: UpdateTypeDto) {
    await this.findOne(id);

    return this.prismaService.type.update({
      where: { id },
      data: updateTypeDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prismaService.type.delete({ where: { id } });
  }
}
