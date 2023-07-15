import { Address } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  email: string;

  name: string;
  phone: string;
  cpf: string;
  password: string;
  google_id: string;
  birth_date: Date;
  is_admin: boolean;
  address?: Address;
}
