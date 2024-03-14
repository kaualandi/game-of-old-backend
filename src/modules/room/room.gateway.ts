import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { RoomService } from './room.service';

@WebSocketGateway()
export class RoomGateway {
  constructor(private readonly roomService: RoomService) {}

  @SubscribeMessage('connectionRoom')
  connection(@MessageBody() id: number) {
    return this.roomService.connection(id);
  }
}
