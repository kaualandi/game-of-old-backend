import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AdminGuard } from 'src/common/guards/admin.guard';
import { RemoveExtraKeysPipe } from 'src/common/pipes/models/remove-extra-keys/remove-extra-keys.pipe';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseGuards(AdminGuard)
  @UsePipes(
    new RemoveExtraKeysPipe([
      'name',
      'description',
      'team_id',
      'filters',
      'base_price',
      'images',
      'trending',
      'discount',
      'is_active',
    ]),
  )
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(@Query('name') name: string) {
    return this.productsService.findAll(name || '');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AdminGuard)
  @UsePipes(
    new RemoveExtraKeysPipe([
      'name',
      'description',
      'team_id',
      'filters',
      'base_price',
      'images',
      'trending',
      'discount',
      'is_active',
    ]),
  )
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
