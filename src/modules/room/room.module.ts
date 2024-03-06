import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomGateway } from './room.gateway';
import { RoomController } from './room.controller';
import { HttpModule } from '@nestjs/axios';
import { AuthService } from '../auth/auth.service';

@Module({
  providers: [RoomGateway, RoomService, AuthService],
  imports: [HttpModule],
  controllers: [RoomController],
})
export class RoomModule {}
