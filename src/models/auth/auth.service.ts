import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(createAuthDto: SignInDto): Promise<any> {
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

  getMe(id: string) {
    return this.usersService.findOne(parseInt(id));
  }
}
