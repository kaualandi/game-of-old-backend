import { Injectable } from '@nestjs/common';
import { UpdateConfigDto } from './dto/update-config.dto';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class ConfigService {
  constructor(private readonly prismaService: PrismaService) {}

  findOne(id: number) {
    return this.prismaService.config.findUnique({
      where: {
        id,
      },
    });
  }

  update(updateConfigDto: UpdateConfigDto) {
    return this.prismaService.config.update({
      where: {
        id: 1,
      },
      data: updateConfigDto,
    });
  }
}
