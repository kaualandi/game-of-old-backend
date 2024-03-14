import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { firstValueFrom } from 'rxjs';
import { RoomService } from 'src/modules/room/room.service';

@Injectable()
export class RoomGuard implements CanActivate {
  constructor(private readonly roomService: RoomService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const room_id = this.extractRoomFromHeader(request);
    if (!room_id) {
      throw new UnauthorizedException('Forneça o id da sala');
    }

    try {
      const room = await firstValueFrom(this.roomService.findOne(+room_id));

      if (!room) {
        throw new UnauthorizedException('Sala inválida.');
      }

      request['room'] = room.id;
    } catch {
      throw new UnauthorizedException('Sala inválida.');
    }
    return true;
  }

  private extractRoomFromHeader(request: Request): string {
    return request.headers.room as string;
  }
}
