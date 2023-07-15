import { Module } from '@nestjs/common';
import { BannersService } from './banners.service';
import { BannersController } from './banners.controller';

@Module({
  controllers: [BannersController],
  providers: [BannersService]
})
export class BannersModule {}
