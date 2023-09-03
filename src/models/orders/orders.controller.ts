import { CorreiosService } from './../correios/correios.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Request,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AdminGuard } from 'src/common/guards/admin.guard';
import { AuthGuard, AuthRequest } from 'src/common/guards/auth.guard';
import { RemoveExtraKeysPipe } from 'src/common/pipes/models/remove-extra-keys/remove-extra-keys.pipe';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';
import { PrePriceDto } from './dto/pre-price.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(
    new RemoveExtraKeysPipe([
      'address_id',
      'total',
      'delivery_fee',
      'delivery_method',
      'cart_ids',
      'payment_method',
      'card_number',
      'card_validity',
      'card_cvv',
      'card_holder_name',
      'installments',
      'cupom',
    ]),
  )
  async create(
    @Body() createOrderDto: CreateOrderDto,
    @Request() request: { user_id: string },
  ) {
    return await this.ordersService.create(createOrderDto, +request.user_id);
  }

  @Get()
  @UseGuards(AdminGuard)
  async findAll(
    @Query('page') page: string,
    @Query('page_size') page_size: string,
  ) {
    return await this.ordersService.findAll(+page, +page_size);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.ordersService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AdminGuard)
  @UsePipes(
    new RemoveExtraKeysPipe([
      'status',
      'total',
      'address_id',
      'subtotal',
      'delivery_fee',
      'customization_fee',
      'order_items',
      'payment_method',
    ]),
  )
  async update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return await this.ordersService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  async remove(@Param('id') id: string) {
    return await this.ordersService.remove(+id);
  }

  @Patch(':id/cancel')
  @UseGuards(AuthGuard)
  async cancel(@Param('id') id: string, @Request() request: AuthRequest) {
    return await this.ordersService.cancel(+id, request.user_id);
  }

  @Post('pre-price')
  @UseGuards(AuthGuard)
  async prePrice(
    @Body() prePriceDto: PrePriceDto,
    @Request() request: { user_id: string },
  ) {
    return await this.ordersService.prePrice(prePriceDto, +request.user_id);
  }
}
