import { IsNotEmpty } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  name: string;

  phone: string;

  cpf: string;

  google_id: string;

  birth_date: string;

  is_admin: boolean;
}
