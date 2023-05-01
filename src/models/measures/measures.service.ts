import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from './../../modules/prisma/prisma.service';
import { CreateMeasureDto } from './dto/create-measure.dto';
import { UpdateMeasureDto } from './dto/update-measure.dto';

@Injectable()
export class MeasuresService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createMeasureDto: CreateMeasureDto) {
    return this.prismaService.measure.create({ data: createMeasureDto });
  }

  findAll(name: string) {
    return this.prismaService.measure.findMany({
      include: { _count: true },
      where: {
        name: {
          contains: name,
        },
      },
    });
  }

  async findOne(id: number) {
    const measure = await this.prismaService.measure.findUnique({
      where: { id },
      include: { _count: { select: { products: true } } },
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
    const measure = await this.findOne(id);

    if (measure._count.products > 0) {
      throw new BadRequestException(
        `Existem produtos cadastrados nesta medida, remova os produtos antes de deletar a medida`,
      );
    }

    return this.prismaService.measure.delete({ where: { id } });
  }
}
