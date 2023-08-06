import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  team_id: number;

  @IsNotEmpty()
  filters: number[];

  @IsNotEmpty()
  base_price: number;

  @IsNotEmpty()
  images: string[];

  variants: string[];
  trending: boolean;
  discount?: number;
  is_active?: boolean;
}
