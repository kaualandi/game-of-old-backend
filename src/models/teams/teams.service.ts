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
    const image_url = await this.imagesService.saveImage(url);

    return this.prismaService.team.create({
      data: { name, url: image_url },
    });
  }

  findAll() {
    return this.prismaService.team.findMany();
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
