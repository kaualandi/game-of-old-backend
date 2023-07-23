import { Module } from '@nestjs/common';
import { PrismaModule, PrismaService } from 'src/modules/prisma';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';

@Module({
  controllers: [HomeController],
  imports: [PrismaModule],
  providers: [HomeService, PrismaService],
})
export class HomeModule {}
