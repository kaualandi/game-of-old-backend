import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { FiltersService } from './filters.service';
import { CreateFilterDto } from './dto/create-filter.dto';
import { UpdateFilterDto } from './dto/update-filter.dto';

@Controller('filters')
export class FiltersController {
  constructor(private readonly filtersService: FiltersService) {}

  @Post()
  create(@Body() createFilterDto: CreateFilterDto) {
    return this.filtersService.create(createFilterDto);
  }

  @Get()
  async findAll(@Query('name') name: string) {
    return await this.filtersService.findAll(name || '');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filtersService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFilterDto: UpdateFilterDto,
  ) {
    return await this.filtersService.update(+id, updateFilterDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.filtersService.remove(+id);
  }
}
