import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  category_id: number;

  @IsNotEmpty()
  measure_id: number;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  images: string[];
}
