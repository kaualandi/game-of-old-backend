import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { HttpService } from '@nestjs/axios';
import { Room } from './entities/room.entity';
import { map } from 'rxjs';

@Injectable()
export class RoomService {
  constructor(private readonly http: HttpService) {}
  create(createRoomDto: CreateRoomDto) {
    return 'This action adds a new room';
  }

  findAll() {
    return `This action returns all room`;
  }

  findOne(id: number) {
    console.log('id', id);
    return this.http
      .get<Room>(`http://localhost:3000/room/${id}`)
      .pipe(map((resp) => resp.data));
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
