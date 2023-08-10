import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class HomeService {
  constructor(private readonly prismaService: PrismaService) {}

  async config() {
    return await this.prismaService.config.findUnique({
      where: { id: 1 },
      include: {
        tags: true,
        articles: true,
        banners: true,
        _count: true,
      },
    });
  }

  async teamsSellers() {
    const teams = await this.prismaService.team.findMany();

    const products = await this.prismaService.product.findMany({
      orderBy: {
        sold: 'desc',
      },
      include: {
        team: true,
        images: true,
      },
      take: 5,
    });

    return {
      teams,
      products,
    };
  }

  async releases() {
    return await this.prismaService.product.findMany({
      orderBy: {
        created_at: 'desc',
      },
      take: 5,
    });
  }
}
