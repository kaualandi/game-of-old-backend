import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  email: string;
  name: string;
  phone: string;
  cpf: string;
  password: string;
  google_id: string;
  birth_date: Date;
  is_admin: boolean;
}
