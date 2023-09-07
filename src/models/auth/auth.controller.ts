import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Request,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { RemoveExtraKeysPipe } from 'src/common/pipes/models/remove-extra-keys/remove-extra-keys.pipe';
import { AuthGuard } from '../../common/guards/auth.guard';
import { AuthService } from './auth.service';
import { ChangePasswordDto } from './dto/change-password';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  signIn(@Body() createAuthDto: SignInDto) {
    return this.authService.signIn(createAuthDto);
  }

  @Post('sign-up')
  @UsePipes(
    new RemoveExtraKeysPipe([
      'email',
      'password',
      'name',
      'phone',
      'cpf',
      'google_id',
      'birth_date',
      'is_admin',
    ]),
  )
  signUp(@Body() createUserDto: SignUpDto) {
    return this.authService.signUp(createUserDto);
  }

  @Get('me')
  @UseGuards(AuthGuard)
  getMe(@Request() request: { user_id: string }) {
    return this.authService.getMe(request.user_id);
  }

  @Post('change-password')
  @UseGuards(AuthGuard)
  changePassword(
    @Request() request: { user_id: string },
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    return this.authService.changePassword(request.user_id, changePasswordDto);
  }

  @Patch('update')
  @UseGuards(AuthGuard)
  @UsePipes(
    new RemoveExtraKeysPipe([
      'email',
      'name',
      'phone',
      'cpf',
      'profile_url',
      'birth_date',
    ]),
  )
  update(
    @Request() request: { user_id: string },
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.authService.update(request.user_id, updateUserDto);
  }

  @Get('account-resume')
  @UseGuards(AuthGuard)
  async accountResume(@Request() request: { user_id: string }) {
    return await this.authService.accountResume(+request.user_id);
  }

  @Get('account-orders')
  @UseGuards(AuthGuard)
  async accountOrders(@Request() request: { user_id: string }) {
    return await this.authService.accountOrders(+request.user_id);
  }
}
