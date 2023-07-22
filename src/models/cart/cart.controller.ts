import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  Request,
} from '@nestjs/common';
import { RemoveExtraKeysPipe } from 'src/common/pipes/models/remove-extra-keys/remove-extra-keys.pipe';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { AuthGuard, AuthRequest } from 'src/common/guards/auth.guard';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(
    new RemoveExtraKeysPipe([
      'product_variant',
      'quantity',
      'customization',
      'customization_name',
      'customization_number',
    ]),
  )
  async create(
    @Body() createCartDto: CreateCartDto,
    @Request() request: AuthRequest,
  ) {
    return await this.cartService.create(createCartDto, +request.user_id);
  }

  @Get()
  @UseGuards(AuthGuard)
  async findAll(@Request() request: AuthRequest) {
    return await this.cartService.findAll(+request.user_id);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: string, @Request() request: AuthRequest) {
    return await this.cartService.findOne(+id, +request.user_id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @UsePipes(
    new RemoveExtraKeysPipe([
      'quantity',
      'customization',
      'customization_name',
      'customization_number',
    ]),
  )
  async update(
    @Param('id') id: string,
    @Body() updateCartDto: UpdateCartDto,
    @Request() request: AuthRequest,
  ) {
    return await this.cartService.update(+id, updateCartDto, +request.user_id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async remove(@Param('id') id: string, @Request() request: AuthRequest) {
    return await this.cartService.remove(+id, +request.user_id);
  }
}
