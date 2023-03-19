import { UpperCasePipe } from './../../common/pipes/models/upper-case/upper-case.pipe';
import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  UsePipes,
} from '@nestjs/common';
import { Project } from './projects.interface';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new UpperCasePipe())
  @Header('Cache-Control', 'none')
  create(@Body() body: string[]): Record<string, string[]> {
    return {
      data: body,
    };
  }

  @Get()
  async findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Project> {
    return this.projectsService.findOne(id);
  }
}
