import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MercadopagoModule } from 'src/modules/mercadopago/mercadopago.module';
import { PrismaModule } from 'src/modules/prisma';
import { CorreiosService } from '../correios/correios.service';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  controllers: [OrdersController],
  imports: [PrismaModule, HttpModule, MercadopagoModule],
  providers: [OrdersService, CorreiosService],
})
export class OrdersModule {}
