import { IsNotEmpty } from 'class-validator';

export class CreateCartDto {
  @IsNotEmpty()
  product_variant: number;

  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  customization: boolean;

  customization_name?: string;
  customization_number?: number;
}
