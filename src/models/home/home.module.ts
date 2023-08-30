import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/modules/prisma';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';

@Module({
  controllers: [HomeController],
  imports: [PrismaModule],
  providers: [HomeService],
})
export class HomeModule {}
