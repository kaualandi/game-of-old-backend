import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { BannersService } from './banners.service';
import { CreateBannerDto } from './dto/create-banner.dto';
import { AdminGuard } from 'src/common/guards/admin.guard';
import { RemoveExtraKeysPipe } from 'src/common/pipes/models/remove-extra-keys/remove-extra-keys.pipe';

@Controller('banners')
export class BannersController {
  constructor(private readonly bannersService: BannersService) {}

  @Post()
  @UseGuards(AdminGuard)
  @UsePipes(new RemoveExtraKeysPipe(['image']))
  async create(@Body() createBannerDto: CreateBannerDto) {
    return await this.bannersService.create(createBannerDto);
  }

  @Get()
  findAll(@Param('page') page: number, @Param('page_size') page_size: number) {
    return this.bannersService.findAll(+page, +page_size);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.bannersService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.bannersService.remove(+id);
  }
}
