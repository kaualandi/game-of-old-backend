import { Module } from '@nestjs/common';
import { MeasuresService } from './measures.service';
import { MeasuresController } from './measures.controller';
import { PrismaModule } from 'src/modules/prisma';

@Module({
  controllers: [MeasuresController],
  imports: [PrismaModule],
  providers: [MeasuresService],
})
export class MeasuresModule {}
