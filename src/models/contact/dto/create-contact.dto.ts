import { ContactBack } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  contact_back: ContactBack;

  @IsNotEmpty()
  subject: string;

  @IsNotEmpty()
  message: string;

  email: string;
}
