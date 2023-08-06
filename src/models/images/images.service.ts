import { S3Service } from './../../modules/aws/s3/s3.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class ImagesService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly s3Service: S3Service,
  ) {}

  async saveImage(url: string) {
    return await this.s3Service.uploadFile(url);
  }

  async create(createImageDto: CreateImageDto) {
    const imageUrl = await this.s3Service.uploadFile(createImageDto.url);
    createImageDto.url = imageUrl;

    return this.prismaService.productImage.create({ data: createImageDto });
  }

  findAll() {
    return this.prismaService.productImage.findMany();
  }

  async findOne(id: number) {
    const image = await this.prismaService.productImage.findUnique({
      where: { id },
      include: { product: true },
    });

    if (!image) {
      throw new NotFoundException(`Imagem não encontrada`);
    }

    return image;
  }

  async update(id: number, updateImageDto: UpdateImageDto) {
    await this.findOne(id);

    const imageUrl = await this.s3Service.uploadFile(updateImageDto.url);
    updateImageDto.url = imageUrl;

    return this.prismaService.productImage.update({
      where: { id },
      data: updateImageDto,
    });
  }

  async remove(id: number) {
    const image = await this.findOne(id);

    this.s3Service.deleteFile(image.url);
    return this.prismaService.productImage.delete({ where: { id } });
  }
}
