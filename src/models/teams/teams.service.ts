import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { S3Service } from 'src/modules/aws/s3/s3.service';
import { PrismaService } from 'src/modules/prisma';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly s3Service: S3Service,
  ) {}

  async create(createTeamDto: CreateTeamDto) {
    const { url } = createTeamDto;

    createTeamDto.url = await this.s3Service.uploadFile(url);

    return this.prismaService.team.create({
      data: createTeamDto,
    });
  }

  async findAll(name: string, page: number, page_size: number) {
    if (!page || !page_size) {
      throw new NotFoundException(
        'Especifique a página e o tamanho da página.',
      );
    }

    const pagedResult = await this.prismaService.team.findMany({
      where: { name: { contains: name } },
      skip: (page - 1) * page_size,
      take: page_size,
    });

    const count = await this.prismaService.team.count();

    return {
      count,
      results: pagedResult,
      next: count > page * page_size ? true : false,
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

    if (!updateTeamDto?.url) {
      updateTeamDto.url = await this.s3Service.uploadFile(updateTeamDto.url);
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
