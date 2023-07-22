import { Module } from '@nestjs/common';
import { CouponsService } from './coupons.service';
import { CouponsController } from './coupons.controller';
import { PrismaModule, PrismaService } from 'src/modules/prisma';

@Module({
  controllers: [CouponsController],
  imports: [PrismaModule],
  providers: [CouponsService, PrismaService],
})
export class CouponsModule {}
