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
import { MeasuresService } from './measures.service';
import { CreateMeasureDto } from './dto/create-measure.dto';
import { UpdateMeasureDto } from './dto/update-measure.dto';
import { RemoveExtraKeysPipe } from 'src/common/pipes/models/remove-extra-keys/remove-extra-keys.pipe';
import { AdminGuard } from 'src/common/guards/admin.guard';

@Controller('measures')
export class MeasuresController {
  constructor(private readonly measuresService: MeasuresService) {}

  @Post()
  @UseGuards(AdminGuard)
  @UsePipes(new RemoveExtraKeysPipe(['name', 'abbreviation']))
  create(@Body() createMeasureDto: CreateMeasureDto) {
    return this.measuresService.create(createMeasureDto);
  }

  @Get()
  findAll(@Query('name') name: string) {
    return this.measuresService.findAll(name || '');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.measuresService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AdminGuard)
  @UsePipes(new RemoveExtraKeysPipe(['name', 'abbreviation']))
  update(@Param('id') id: string, @Body() updateMeasureDto: UpdateMeasureDto) {
    return this.measuresService.update(+id, updateMeasureDto);
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  remove(@Param('id') id: string) {
    return this.measuresService.remove(+id);
  }
}
