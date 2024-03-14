import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomService {
  constructor(private readonly http: HttpService) {}
  create() {
    return this.http
      .get<Room>(`http://localhost:3000/room`)
      .pipe(map((resp) => resp.data));
  }

  connection(id: number) {
    return 'Kauà é gay ' + id;
  }

  findOne(id: number) {
    return this.http
      .get<Room>(`http://localhost:3000/room/${id}`)
      .pipe(map((resp) => resp.data));
  }

  remove(id: number) {
    return this.http
      .delete<Room>(`http://localhost:3000/room/${id}`)
      .pipe(map((resp) => resp.data));
  }
}
