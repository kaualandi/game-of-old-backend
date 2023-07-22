import { Module } from '@nestjs/common';
import { BannersService } from './banners.service';
import { BannersController } from './banners.controller';
import { S3Module } from 'src/modules/aws/s3/s3.module';
import { PrismaModule, PrismaService } from 'src/modules/prisma';
import { S3Service } from 'src/modules/aws/s3/s3.service';

@Module({
  controllers: [BannersController],
  imports: [S3Module, PrismaModule],
  providers: [BannersService, S3Service, PrismaService],
})
export class BannersModule {}
