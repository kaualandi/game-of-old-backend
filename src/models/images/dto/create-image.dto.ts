import { IsNotEmpty } from 'class-validator';

export class CreateImageDto {
  @IsNotEmpty()
  url: string;

  @IsNotEmpty()
  product_id: number;
}
