import { IsNotEmpty } from 'class-validator';

export class PriceDeadlineCorreioDto {
  @IsNotEmpty()
  destination_zip_code: string;

  @IsNotEmpty()
  products_quantity: number;

  @IsNotEmpty()
  price: number;
}
