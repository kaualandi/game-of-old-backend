import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AdminGuard } from 'src/common/guards/admin.guard';
import { RemoveExtraKeysPipe } from 'src/common/pipes/models/remove-extra-keys/remove-extra-keys.pipe';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @UseGuards(AdminGuard)
  @UsePipes(new RemoveExtraKeysPipe(['image']))
  async create(@Body() createArticleDto: CreateArticleDto) {
    return await this.articlesService.create(createArticleDto);
  }

  @Get()
  async findAll(
    @Query('page') page: string,
    @Query('page_size') page_size: string,
  ) {
    return await this.articlesService.findAll(+page, +page_size);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.articlesService.findOne(+id);
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  async remove(@Param('id') id: string) {
    return await this.articlesService.remove(+id);
  }
}
