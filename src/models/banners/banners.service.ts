import { Injectable } from '@nestjs/common';
import { CreateBannerDto } from './dto/create-banner.dto';
import { S3Service } from 'src/modules/aws/s3/s3.service';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class BannersService {
  constructor(
    private readonly s3Service: S3Service,
    private readonly prismaService: PrismaService,
  ) {}

  async create(createBannerDto: CreateBannerDto) {
    const url = await this.s3Service.uploadFile(createBannerDto.image);

    return await this.prismaService.article.create({
      data: {
        image: url,
        config_id: 1,
      },
    });
  }

  findAll(page: number, page_size: number) {
    return this.prismaService.article.findMany({
      skip: (page - 1) * page_size,
      take: page_size,
    });
  }

  findOne(id: number) {
    return this.prismaService.article.findUnique({
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.article.delete({
      where: {
        id,
      },
    });
  }
}
