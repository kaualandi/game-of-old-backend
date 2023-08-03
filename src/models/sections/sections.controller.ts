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
import { AdminGuard } from 'src/common/guards/admin.guard';
import { RemoveExtraKeysPipe } from 'src/common/pipes/models/remove-extra-keys/remove-extra-keys.pipe';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { SectionsService } from './sections.service';

@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Post()
  @UseGuards(AdminGuard)
  @UsePipes(new RemoveExtraKeysPipe(['name']))
  create(@Body() createSectionDto: CreateSectionDto) {
    return this.sectionsService.create(createSectionDto);
  }

  @Get()
  async findAll(
    @Query('name') name: string,
    @Query('page') page: string,
    @Query('page_size') page_size: string,
  ) {
    return await this.sectionsService.findAll(name, +page, +page_size);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.sectionsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AdminGuard)
  @UsePipes(new RemoveExtraKeysPipe(['name']))
  async update(
    @Param('id') id: string,
    @Body() updateSectionDto: UpdateSectionDto,
  ) {
    return await this.sectionsService.update(+id, updateSectionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.sectionsService.remove(+id);
  }
}
