import { PartialType } from '@nestjs/mapped-types';
import { CreateVariationsDto } from './create-variations.dto';

export class UpdateVariationsDto extends PartialType(CreateVariationsDto) {
  name: string;
  price: number;
  image: string;
  product_id: number;
}
