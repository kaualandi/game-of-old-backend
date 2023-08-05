import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { UsersModule } from '../users/users.module';
import { PrismaModule, PrismaService } from 'src/modules/prisma';
import { UsersService } from '../users/users.service';
import { S3Module } from 'src/modules/aws/s3/s3.module';
import { S3Service } from 'src/modules/aws/s3/s3.service';

@Module({
  controllers: [CartController],
  imports: [PrismaModule, UsersModule, S3Module],
  providers: [CartService, PrismaService, UsersService, S3Service],
})
export class CartModule {}
