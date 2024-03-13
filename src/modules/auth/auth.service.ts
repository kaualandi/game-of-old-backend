import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { User } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpService) {}

  create(createAuthDto: CreateAuthDto) {
    return this.http
      .post<User>(`http://localhost:3000/user`, createAuthDto)
      .pipe(map((resp) => resp.data));
  }

  findAll() {
    return this.http
      .get<User>(`http://localhost:3000/user`)
      .pipe(map((resp) => resp.data));
  }

  findOne(id: number) {
    return this.http
      .get<User>(`http://localhost:3000/user/${id}`)
      .pipe(map((resp) => resp.data));
  }

  findOneByEmail(email: string) {
    return this.http
      .get<User[]>(`http://localhost:3000/user?email=${email}`)
      .pipe(map((resp) => resp.data));
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return this.http
      .post<User>(`http://localhost:3000/user/${id}`, updateAuthDto)
      .pipe(map((resp) => resp.data));
  }

  remove(id: number) {
    return this.http
      .delete<User>(`http://localhost:3000/user/${id}`)
      .pipe(map((resp) => resp.data));
  }
}
