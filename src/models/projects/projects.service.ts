import { Injectable, NotFoundException } from '@nestjs/common';
import { ProjectStatus, Project } from './projects.interface';

@Injectable()
export class ProjectsService {
  projects: Project[] = [
    {
      id: '1',
      name: 'Project 1',
      description: 'Description 1',
      status: ProjectStatus.OPEN,
    },
    {
      id: '2',
      name: 'Project 2',
      description: 'Description 2',
      status: ProjectStatus.IN_PROGRESS,
    },
    {
      id: '3',
      name: 'Project 3',
      description: 'Description 3',
      status: ProjectStatus.DONE,
    },
  ];

  async create() {
    return {
      id: '1',
      name: 'Project 1',
      description: 'Description 1',
      status: ProjectStatus.OPEN,
    };
  }

  async findAll() {
    return this.projects;
  }

  async findOne(id: string) {
    const project = this.projects.find((project) => project.id === id);
    if (!project) {
      throw new NotFoundException(`Projeto com o id ${id} não encontrado.`);
    }
    return project;
  }
}
