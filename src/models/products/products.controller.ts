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
      'base_price',
      'trending',
      'discount',
      'team_id',
      'filters',
      'variants',
      'images',
    ]),
  )
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.create(createProductDto);
  }

  @Get()
  async findAll(
    @Query('name') name: string,
    @Query('page') page: string,
    @Query('page_size') page_size: string,
  ) {
    return await this.productsService.findAll(name, +page, +page_size);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productsService.findOne(+id);
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
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return await this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  async remove(@Param('id') id: string) {
    return await this.productsService.remove(+id);
  }
}
