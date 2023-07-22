import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { CouponsService } from './coupons.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { AdminGuard } from 'src/common/guards/admin.guard';

@Controller('coupons')
export class CouponsController {
  constructor(private readonly couponsService: CouponsService) {}

  @Post()
  @UseGuards(AdminGuard)
  async create(@Body() createCouponDto: CreateCouponDto) {
    return await this.couponsService.create(createCouponDto);
  }

  @Get()
  findAll(
    @Param('name') name: string,
    @Param('page') page: number,
    @Param('page_size') page_size: number,
  ) {
    return this.couponsService.findAll(name, +page, +page_size);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.couponsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AdminGuard)
  async update(
    @Param('id') id: string,
    @Body() updateCouponDto: UpdateCouponDto,
  ) {
    return await this.couponsService.update(+id, updateCouponDto);
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  async remove(@Param('id') id: string) {
    return await this.couponsService.remove(+id);
  }
}
