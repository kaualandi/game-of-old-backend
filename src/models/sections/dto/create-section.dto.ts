import { IsNotEmpty } from 'class-validator';

export class CreateSectionDto {
  @IsNotEmpty()
  name: string;
}
