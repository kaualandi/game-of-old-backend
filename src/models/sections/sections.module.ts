import { Module } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { SectionsController } from './sections.controller';
import { PrismaModule } from 'src/modules/prisma';

@Module({
  controllers: [SectionsController],
  imports: [PrismaModule],
  providers: [SectionsService],
})
export class SectionsModule {}
