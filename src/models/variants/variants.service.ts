import { S3Service } from './../../modules/aws/s3/s3.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVariantsDto } from './dto/create-variants.dto';
import { UpdateVariantsDto } from './dto/update-variants.dto';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class VariantsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly s3Service: S3Service,
  ) {}

  async create(createVariantsDto: CreateVariantsDto) {
    const imageUrl = await this.s3Service.uploadFile(createVariantsDto.image);
    createVariantsDto.image = imageUrl;

    return this.prismaService.productVariant.create({
      data: createVariantsDto,
    });
  }

  findAll(name: string) {
    return this.prismaService.productVariant.findMany({
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
    const variant = await this.prismaService.productVariant.findUnique({
      where: { id },
    });

    if (!variant) {
      throw new NotFoundException(`Variação não encontrada`);
    }

    return variant;
  }

  async update(id: number, updateVariantsDto: UpdateVariantsDto) {
    await this.findOne(id);

    if (!updateVariantsDto?.image?.startsWith('http')) {
      const imageUrl = await this.s3Service.uploadFile(updateVariantsDto.image);
      updateVariantsDto.image = imageUrl;
    }

    return this.prismaService.productVariant.update({
      where: { id },
      data: updateVariantsDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prismaService.productVariant.delete({ where: { id } });
  }
}
