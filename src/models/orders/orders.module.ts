import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaModule } from 'src/modules/prisma';
import { CorreiosService } from '../correios/correios.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [OrdersController],
  imports: [PrismaModule, HttpModule],
  providers: [OrdersService, CorreiosService],
})
export class OrdersModule {}
