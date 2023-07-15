import { IsNotEmpty } from 'class-validator';

export class CreateFilterDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  category_id: number;
}
