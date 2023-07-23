import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/modules/prisma';
@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  selectUser = {
    id: true,
    name: true,
    email: true,
    is_admin: true,
    created_at: true,
    updated_at: true,
    address: true,
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
      throw new NotFoundException(
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

    return this.prismaService.user.update({
      where: { id },
      data: {
        ...updateUserDto,
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
