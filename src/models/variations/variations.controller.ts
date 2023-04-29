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
} from '@nestjs/common';
import { RemoveExtraKeysPipe } from 'src/common/pipes/models/remove-extra-keys/remove-extra-keys.pipe';
import { CreateVariationsDto } from './dto/create-variations.dto';
import { UpdateVariationsDto } from './dto/update-variations.dto';
import { VariationsService } from './variations.service';
import { AdminGuard } from 'src/common/guards/admin.guard';

@Controller('variations')
export class VariationsController {
  constructor(private readonly variationService: VariationsService) {}

  @Post()
  @UseGuards(AdminGuard)
  @UsePipes(new RemoveExtraKeysPipe(['name', 'price', 'image', 'product_id']))
  create(@Body() createVariationDto: CreateVariationsDto) {
    return this.variationService.create(createVariationDto);
  }

  @Get()
  findAll() {
    return this.variationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.variationService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AdminGuard)
  @UsePipes(new RemoveExtraKeysPipe(['name', 'price', 'image', 'product_id']))
  update(
    @Param('id') id: string,
    @Body() updateVariationDto: UpdateVariationsDto,
  ) {
    return this.variationService.update(+id, updateVariationDto);
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  remove(@Param('id') id: string) {
    return this.variationService.remove(+id);
  }
}
