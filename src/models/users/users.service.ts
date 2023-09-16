import { Injectable } from '@nestjs/common';
import {
  NotFoundException,
  BadRequestException,
} from '@nestjs/common/exceptions';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/modules/prisma';
import { S3Service } from 'src/modules/aws/s3/s3.service';
@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private s3Service: S3Service,
  ) {}

  selectUser = {
    id: true,
    name: true,
    email: true,
    phone: true,
    profile_url: true,
    cpf: true,
    birth_date: true,
    is_admin: true,
    created_at: true,
    updated_at: true,
    address: {
      where: {
        is_active: true,
      },
    },
    cart: {
      select: {
        id: true,
        cart_items: true,
      },
    },
  };

  create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({
      data: {
        ...createUserDto,
        address: {
          create: createUserDto.address,
        },
        cart: {
          create: {},
        },
      },
    });
  }

  async findAll(name: string, page: number, page_size: number) {
    if (!page || !page_size) {
      throw new BadRequestException(
        'Especifique a página e o tamanho da página.',
      );
    }

    const pagedResult = await this.prismaService.user.findMany({
      select: this.selectUser,
      where: {
        name: {
          contains: name,
        },
      },
      skip: (page - 1) * page_size,
      take: page_size,
    });

    const count = await this.prismaService.user.count();

    return {
      count,
      results: pagedResult,
      next: count > page * page_size ? true : false,
      previous: page <= 1 ? false : true,
    };
  }

  async findOne(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
      select: this.selectUser,
    });

    if (!user) {
      throw new NotFoundException(`Usuário não encontrado`);
    }

    return user;
  }

  async findOneByEmail(email: string) {
    return this.prismaService.user.findUnique({ where: { email } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id);

    const profile_url = await this.s3Service.uploadFile(
      updateUserDto.profile_url,
    );

    return this.prismaService.user.update({
      where: { id },
      data: {
        ...updateUserDto,
        profile_url,
        address: {
          create: updateUserDto.address,
        },
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prismaService.user.delete({ where: { id } });
  }

  async findOneWithPassword(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`Usuário não encontrado`);
    }

    return user;
  }
}
