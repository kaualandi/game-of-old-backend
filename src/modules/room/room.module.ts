import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { RoomController } from './room.controller';
import { RoomGateway } from './room.gateway';
import { RoomService } from './room.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [RoomGateway, RoomService, AuthService],
  imports: [
    HttpModule,
    JwtModule.register({
      secret: 'ebd1b76961d7d38aca2bd7b141f9a163',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [RoomController],
})
export class RoomModule {}
