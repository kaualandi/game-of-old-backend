import { Module } from '@nestjs/common';
import { CorreiosService } from './correios.service';
import { CorreiosController } from './correios.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [CorreiosController],
  imports: [HttpModule],
  providers: [CorreiosService],
})
export class CorreiosModule {}
