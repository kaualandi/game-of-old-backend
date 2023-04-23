import { PrismaService } from './../../modules/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateMeasureDto } from './dto/create-measure.dto';
import { UpdateMeasureDto } from './dto/update-measure.dto';

@Injectable()
export class MeasuresService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createMeasureDto: CreateMeasureDto) {
    return this.prismaService.measure.create({ data: createMeasureDto });
  }

  findAll() {
    return this.prismaService.measure.findMany();
  }

  findOne(id: number) {
    return this.prismaService.measure.findUnique({ where: { id } });
  }

  update(id: number, updateMeasureDto: UpdateMeasureDto) {
    return this.prismaService.measure.update({
      where: { id },
      data: updateMeasureDto,
    });
  }

  remove(id: number) {
    return this.prismaService.measure.delete({ where: { id } });
  }
}
