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
  Query,
} from '@nestjs/common';
import { RemoveExtraKeysPipe } from 'src/common/pipes/models/remove-extra-keys/remove-extra-keys.pipe';
import { CreateVariantsDto } from './dto/create-variants.dto';
import { UpdateVariantsDto } from './dto/update-variants.dto';
import { VariantsService } from './variants.service';
import { AdminGuard } from 'src/common/guards/admin.guard';

@Controller('variants')
export class VariantsController {
  constructor(private readonly variantService: VariantsService) {}

  @Post()
  @UseGuards(AdminGuard)
  @UsePipes(new RemoveExtraKeysPipe(['name', 'is_active', 'product_id']))
  create(@Body() createVariationDto: CreateVariantsDto) {
    return this.variantService.create(createVariationDto);
  }

  @Get()
  findAll(@Query('name') name: string) {
    return this.variantService.findAll(name);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.variantService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AdminGuard)
  @UsePipes(new RemoveExtraKeysPipe(['name', 'is_active', 'product_id']))
  update(
    @Param('id') id: string,
    @Body() updateVariationDto: UpdateVariantsDto,
  ) {
    return this.variantService.update(+id, updateVariationDto);
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  remove(@Param('id') id: string) {
    return this.variantService.remove(+id);
  }
}
