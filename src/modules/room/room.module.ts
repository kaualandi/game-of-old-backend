import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';
import { RoomController } from './room.controller';
import { RoomGateway } from './room.gateway';
import { RoomService } from './room.service';

@Module({
  providers: [RoomGateway, RoomService, AuthService],
  imports: [
    HttpModule,
    JwtModule.register({
      secret: process.env.SECRET_USER,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [RoomController],
})
export class RoomModule {}
