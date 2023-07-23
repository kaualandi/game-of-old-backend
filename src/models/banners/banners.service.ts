import { Injectable, NotFoundException } from '@nestjs/common';
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

    return await this.prismaService.banner.create({
      data: {
        image: url,
        config_id: 1,
      },
    });
  }

  findAll(page: number, page_size: number) {
    return this.prismaService.banner.findMany({
      skip: (page - 1) * page_size,
      take: page_size,
    });
  }

  async findOne(id: number) {
    const banner = this.prismaService.banner.findUnique({
      where: {
        id,
      },
    });

    if (!banner) {
      throw new NotFoundException(`Banner não encontrado`);
    }

    return banner;
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prismaService.banner.delete({
      where: {
        id,
      },
    });
  }
}
