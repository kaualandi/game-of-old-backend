import { Module } from '@nestjs/common';
import { CorreiosService } from './correios.service';
import { CorreiosController } from './correios.controller';
import { HttpModule } from '@nestjs/axios';
import { PrismaModule } from 'src/modules/prisma';

@Module({
  controllers: [CorreiosController],
  imports: [HttpModule, PrismaModule],
  providers: [CorreiosService],
})
export class CorreiosModule {}
