import { IsNotEmpty } from 'class-validator';
import { Image, Variation, Type } from '@prisma/client';

export class ProductCreateDto {
  id: number;
  description: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  categoryId: number;

  @IsNotEmpty()
  measureId: Image[];

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  image: Image[];

  @IsNotEmpty()
  Variation: Variation[];

  @IsNotEmpty()
  Type: Type[];
}
