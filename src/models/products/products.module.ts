import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaModule } from 'src/modules/prisma';
import { ImagesService } from '../images/images.service';
import { S3Module } from 'src/modules/aws/s3/s3.module';

@Module({
  controllers: [ProductsController],
  imports: [PrismaModule, S3Module],
  providers: [ProductsService, ImagesService],
})
export class ProductsModule {}
