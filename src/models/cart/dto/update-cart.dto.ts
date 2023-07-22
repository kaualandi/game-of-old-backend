import { PartialType } from '@nestjs/mapped-types';
import { CreateCartDto } from './create-cart.dto';

export class UpdateCartDto extends PartialType(CreateCartDto) {
  quantity?: number;
  customization?: boolean;
  customization_name?: string;
  customization_price?: number;
}
