import { Product } from '@prisma/client';
import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @HttpCode(201)
  @Header('Cache-Control', 'none')
  create(@Body() body: Product) {
    return this.productsService.create(body);
  }

  @Get()
  async findAll() {
    try {
      return this.productsService.findAll();
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
