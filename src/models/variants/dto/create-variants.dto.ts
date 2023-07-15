import { IsNotEmpty } from 'class-validator';

export class CreateVariantsDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  product_id: number;

  is_active: boolean;
}
