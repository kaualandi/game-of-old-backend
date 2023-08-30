import { Module } from '@nestjs/common';
import { CouponsService } from './coupons.service';
import { CouponsController } from './coupons.controller';
import { PrismaModule } from 'src/modules/prisma';

@Module({
  controllers: [CouponsController],
  imports: [PrismaModule],
  providers: [CouponsService],
})
export class CouponsModule {}
