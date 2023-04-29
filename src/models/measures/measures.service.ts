import { PrismaService } from './../../modules/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMeasureDto } from './dto/create-measure.dto';
import { UpdateMeasureDto } from './dto/update-measure.dto';

@Injectable()
export class MeasuresService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createMeasureDto: CreateMeasureDto) {
    return this.prismaService.measure.create({ data: createMeasureDto });
  }

  findAll() {
    return this.prismaService.measure.findMany({
      include: { _count: true },
    });
  }

  async findOne(id: number) {
    const measure = await this.prismaService.measure.findUnique({
      where: { id },
    });

    if (!measure) {
      throw new NotFoundException(`Medida não encontrada`);
    }

    return measure;
  }

  async update(id: number, updateMeasureDto: UpdateMeasureDto) {
    await this.findOne(id);

    return this.prismaService.measure.update({
      where: { id },
      data: updateMeasureDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prismaService.measure.delete({ where: { id } });
  }
}
