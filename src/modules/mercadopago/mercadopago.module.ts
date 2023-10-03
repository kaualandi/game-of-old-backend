import { Module } from '@nestjs/common';
import { MercadopagoService } from './mercadopago.service';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  providers: [MercadopagoService],
  exports: [MercadopagoService],
  imports: [HttpModule],
})
export class MercadopagoModule {}
