import { Module } from '@nestjs/common';
import { FiltersService } from './filters.service';
import { FiltersController } from './filters.controller';
import { PrismaModule, PrismaService } from 'src/modules/prisma';

@Module({
  controllers: [FiltersController],
  imports: [PrismaModule],
  providers: [FiltersService, PrismaService],
})
export class FiltersModule {}
