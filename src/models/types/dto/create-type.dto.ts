import { IsNotEmpty } from 'class-validator';

export class CreateTypeDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  product_id: number;
}
