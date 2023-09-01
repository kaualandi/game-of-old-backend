import { IsNotEmpty } from 'class-validator';

export class PrePriceDto {
  @IsNotEmpty()
  items: number[];
}
