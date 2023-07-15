import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from 'src/modules/prisma';
import { ImagesService } from '../images/images.service';

@Injectable()
export class TeamsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly imagesService: ImagesService,
  ) {}

  async create(createTeamDto: CreateTeamDto) {
    const { name, url } = createTeamDto;

    let image_url = undefined;
    if (url) {
      if (!url.startsWith('http')) {
        image_url = await this.imagesService.saveImage(url);
      } else {
        image_url = url;
      }
    }

    return this.prismaService.team.create({
      data: { name, url: image_url },
    });
  }

  async findAll(name: string, page: number, page_size: number) {
    if (!page || !page_size) {
      throw new NotFoundException(
        'Especifique a página e o tamanho da página.',
      );
    }

    const teams = await this.prismaService.team.findMany({
      where: { name: { contains: name } },
      skip: (page - 1) * page_size,
      take: page_size,
    });

    return {
      count: await this.prismaService.team.count(),
      results: teams,
      next: teams.length < page_size ? false : true,
      previous: page <= 1 ? false : true,
    };
  }

  async findOne(id: number) {
    const team = await this.prismaService.team.findUnique({
      where: { id },
      include: {
        products: true,
      },
    });

    if (!team) {
      throw new NotFoundException(`Time não encontrado`);
    }

    return team;
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    await this.findOne(id);

    if (!updateTeamDto?.url?.startsWith('http')) {
      updateTeamDto.url = await this.imagesService.saveImage(updateTeamDto.url);
    }

    return this.prismaService.team.update({
      where: { id },
      data: updateTeamDto,
    });
  }

  async remove(id: number) {
    const team = await this.findOne(id);

    if (team.products.length > 0) {
      throw new NotFoundException(
        `Não é possível excluir um time que possui produtos`,
      );
    }

    return this.prismaService.team.delete({ where: { id } });
  }
}
