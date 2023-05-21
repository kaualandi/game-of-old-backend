import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto, CreateOrderItem } from './create-order.dto';

export interface UpdateOrderItem extends CreateOrderItem {
  id?: number;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  user_id: number;
  status: string;
  total: number;
  order_items: UpdateOrderItem[];
}
