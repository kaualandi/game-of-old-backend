import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { UsersModule } from '../users/users.module';
import { PrismaModule, PrismaService } from 'src/modules/prisma';
import { UsersService } from '../users/users.service';

@Module({
  controllers: [CartController],
  imports: [PrismaModule, UsersModule],
  providers: [CartService, PrismaService, UsersService],
})
export class CartModule {}
