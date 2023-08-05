import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import { ChangePasswordDto } from './dto/change-password';
import { SignUpDto } from './dto/sign-up.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

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
}
