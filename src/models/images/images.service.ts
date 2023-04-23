import { S3Service } from './../../modules/aws/s3/s3.service';
import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class ImagesService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly s3Service: S3Service,
  ) {}

  async create(createImageDto: CreateImageDto) {
    const imageUrl = await this.s3Service.uploadFile(createImageDto.url);
    createImageDto.url = imageUrl;

    return this.prismaService.image.create({ data: createImageDto });
  }

  findAll() {
    return this.prismaService.image.findMany();
  }

  findOne(id: number) {
    return this.prismaService.image.findUnique({ where: { id } });
  }

  async update(id: number, updateImageDto: UpdateImageDto) {
    const imageUrl = await this.s3Service.uploadFile(updateImageDto.url);
    updateImageDto.url = imageUrl;

    return this.prismaService.image.update({
      where: { id },
      data: updateImageDto,
    });
  }

  remove(id: number) {
    return this.prismaService.image.delete({ where: { id } });
  }
}
