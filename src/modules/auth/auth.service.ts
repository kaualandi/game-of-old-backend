import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { HttpService } from '@nestjs/axios';
import { User } from './entities/auth.entity';
import { map } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpService) {}

  async create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
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
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
