import { S3Service } from './../../modules/aws/s3/s3.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVariationsDto } from './dto/create-variations.dto';
import { UpdateVariationsDto } from './dto/update-variations.dto';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class VariationsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly s3Service: S3Service,
  ) {}

  async create(createVariationsDto: CreateVariationsDto) {
    const imageUrl = await this.s3Service.uploadFile(createVariationsDto.image);
    createVariationsDto.image = imageUrl;

    return this.prismaService.variation.create({ data: createVariationsDto });
  }

  findAll() {
    return this.prismaService.variation.findMany();
  }

  async findOne(id: number) {
    const variation = await this.prismaService.variation.findUnique({
      where: { id },
    });

    if (!variation) {
      throw new NotFoundException(`Variação não encontrada`);
    }

    return variation;
  }

  async update(id: number, updateVariationsDto: UpdateVariationsDto) {
    await this.findOne(id);

    if (updateVariationsDto.image) {
      const imageUrl = await this.s3Service.uploadFile(
        updateVariationsDto.image,
      );
      updateVariationsDto.image = imageUrl;
    }

    return this.prismaService.variation.update({
      where: { id },
      data: updateVariationsDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prismaService.variation.delete({ where: { id } });
  }
}
