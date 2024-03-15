import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    HttpModule,
    JwtModule.register({
      secret: process.env.SECRET_USER,
      signOptions: { expiresIn: '1d' },
    }),
  ],
})
export class AuthModule {}
