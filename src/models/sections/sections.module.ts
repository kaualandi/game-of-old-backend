import { Module } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { SectionsController } from './sections.controller';
import { PrismaModule, PrismaService } from 'src/modules/prisma';

@Module({
  controllers: [SectionsController],
  imports: [PrismaModule],
  providers: [SectionsService, PrismaService],
})
export class SectionsModule {}
