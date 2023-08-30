import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { PrismaModule } from 'src/modules/prisma';

@Module({
  controllers: [AddressController],
  imports: [PrismaModule],
  providers: [AddressService],
})
export class AddressModule {}
