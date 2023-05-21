import { IsNotEmpty } from 'class-validator';

export interface CreateOrderItem {
  product_id: number;
  quantity: number;
  price: number;
}

export class CreateOrderDto {
  @IsNotEmpty()
  user_id: number;

  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  total: number;

  @IsNotEmpty()
  order_items: CreateOrderItem[];
}
