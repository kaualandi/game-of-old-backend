import { PrismaService } from './../../modules/prisma/prisma.service';
import { OrdersService } from './../orders/orders.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import { ChangePasswordDto } from './dto/change-password';
import { SignUpDto } from './dto/sign-up.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  private itemsToCalcRegisterPercent = [
    'name',
    'email',
    'phone',
    'cpf',
    'birth_date',
    'profile_url',
  ];

  async signIn(createAuthDto: SignInDto) {
    const { email, password: pass } = createAuthDto;

    const user = await this.usersService.findOneByEmail(email);
    if (user?.password !== pass) {
      throw new BadRequestException('E-mail ou senha inválidos');
    }

    const payload = { email: user.email, id: user.id, admin: user.is_admin };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(createUserDto: SignUpDto) {
    const user = await this.usersService.create(createUserDto);

    const payload = { email: user.email, id: user.id, admin: user.is_admin };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  getMe(id: string) {
    return this.usersService.findOne(parseInt(id));
  }

  async changePassword(id: string, changePasswordDto: ChangePasswordDto) {
    const user = await this.usersService.findOneWithPassword(parseInt(id));

    if (user.password !== changePasswordDto.old_password) {
      throw new BadRequestException('Senha atual incorreta');
    }

    user.password = changePasswordDto.new_password;
    await this.usersService.update(parseInt(id), user);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.usersService.findOne(parseInt(id));
    await this.usersService.update(parseInt(id), updateUserDto);
    return this.usersService.findOne(parseInt(id));
  }

  async accountResume(id: number) {
    const user = await this.getMe(id + '');
    const lastOrder = await this.prismaService.order.findFirst({
      where: {
        user_id: id,
      },
      orderBy: {
        created_at: 'desc',
      },
      include: {
        address: true,
      },
    });

    const { percent, text_status: textStatus } = this.calcUserPercent(user);

    return {
      user,
      last_order: lastOrder,
      user_register_percent: percent,
      user_register_text_status: textStatus,
    };
  }

  async accountOrders(id: number) {
    const orders = await this.prismaService.order.findMany({
      where: {
        user_id: id,
      },
      orderBy: {
        created_at: 'desc',
      },
      include: {
        address: true,
        order_items: true,
      },
    });

    return orders;
  }

  private calcUserPercent(user) {
    const quantityValid = this.itemsToCalcRegisterPercent.reduce(
      (acc, curr) => {
        if (user[curr]) {
          acc++;
        }
        return acc;
      },
      0,
    );

    const percent = Math.round(
      (quantityValid / this.itemsToCalcRegisterPercent.length) * 100,
    );

    const textStatus =
      percent < 20
        ? 'Nada mal!'
        : percent < 60
        ? 'Quase lá!'
        : percent < 100
        ? 'Falta pouco!'
        : 'Parabéns!';

    return {
      percent,
      text_status: textStatus,
    };
  }
}
