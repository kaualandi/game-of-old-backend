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
  Query,
} from '@nestjs/common';
import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { RemoveExtraKeysPipe } from 'src/common/pipes/models/remove-extra-keys/remove-extra-keys.pipe';
import { AdminGuard } from 'src/common/guards/admin.guard';

@Controller('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Post()
  @UseGuards(AdminGuard)
  @UsePipes(new RemoveExtraKeysPipe(['name', 'price', 'image', 'product_id']))
  create(@Body() createTypeDto: CreateTypeDto) {
    return this.typesService.create(createTypeDto);
  }

  @Get()
  findAll(@Query('name') name: string) {
    return this.typesService.findAll(name || '');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AdminGuard)
  @UsePipes(new RemoveExtraKeysPipe(['name', 'price', 'image', 'product_id']))
  update(@Param('id') id: string, @Body() updateTypeDto: UpdateTypeDto) {
    return this.typesService.update(+id, updateTypeDto);
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  remove(@Param('id') id: string) {
    return this.typesService.remove(+id);
  }
}
