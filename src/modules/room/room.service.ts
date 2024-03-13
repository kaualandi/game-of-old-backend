import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomService {
  constructor(private readonly http: HttpService) {}
  create(createRoomDto: CreateRoomDto) {
    return this.http
      .get<Room>(`http://localhost:3000/room`, createRoomDto)
      .pipe(map((resp) => resp.data));
  }

  findOne(id: number) {
    return 'Kauà é gay ' + id;
  }

  remove(id: number) {
    return this.http
      .delete<Room>(`http://localhost:3000/room/${id}`)
      .pipe(map((resp) => resp.data));
  }
}
