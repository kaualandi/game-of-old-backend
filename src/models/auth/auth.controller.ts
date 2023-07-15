import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AuthGuard } from '../../common/guards/auth.guard';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { ChangePasswordDto } from './dto/change-password';
import { SignUpDto } from './dto/sign-up.dto';
import { RemoveExtraKeysPipe } from 'src/common/pipes/models/remove-extra-keys/remove-extra-keys.pipe';

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
}
