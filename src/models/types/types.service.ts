import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';

@Injectable()
export class TypesService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createTypeDto: CreateTypeDto) {
    return this.prismaService.type.create({ data: createTypeDto });
  }

  findAll() {
    return this.prismaService.type.findMany();
  }

  findOne(id: number) {
    return this.prismaService.type.findUnique({ where: { id } });
  }

  update(id: number, updateTypeDto: UpdateTypeDto) {
    return this.prismaService.type.update({
      where: { id },
      data: updateTypeDto,
    });
  }

  remove(id: number) {
    return this.prismaService.type.delete({ where: { id } });
  }
}
