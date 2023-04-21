import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { PrismaService } from 'src/modules/prisma';

@Module({
  providers: [ProductsService, PrismaService],
  controllers: [ProductsController],
})
export class ProductsModule {}
