import { Controller, Get, Query } from '@nestjs/common';
import { CorreiosService } from './correios.service';
import { PriceDeadlineCorreioDto } from './dto/price-deadline-correio.dto';

@Controller('correios')
export class CorreiosController {
  constructor(private readonly correiosService: CorreiosService) {}

  @Get('price-deadline')
  async priceDeadLine(
    @Query() priceDeadlineCorreioDto: PriceDeadlineCorreioDto,
  ) {
    return await this.correiosService.priceDeadLine(priceDeadlineCorreioDto);
  }
}
