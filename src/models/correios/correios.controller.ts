import { Controller, Get, Query } from '@nestjs/common';
import { CorreiosService } from './correios.service';
import { PriceDeadlineCorreioDto } from './dto/price-deadline-correio.dto';
import { TrackingByCodeDto } from './dto/tracking-by-code.dto';

@Controller('correios')
export class CorreiosController {
  constructor(private readonly correiosService: CorreiosService) {}

  @Get('price-deadline')
  async priceDeadLine(
    @Query() priceDeadlineCorreioDto: PriceDeadlineCorreioDto,
  ) {
    return await this.correiosService.priceDeadLine(priceDeadlineCorreioDto);
  }

  @Get('tracking/by-code')
  async trackingByCode(@Query() trackingByCodeDto: TrackingByCodeDto) {
    return await this.correiosService.trackingByCode(trackingByCodeDto);
  }

  // @Get('tracking/by-order')
}
