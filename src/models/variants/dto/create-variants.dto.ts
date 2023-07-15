import { IsNotEmpty } from 'class-validator';

export class CreateVariantsDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  product_id: number;
}
