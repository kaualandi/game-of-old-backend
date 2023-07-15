import { PaymentMethod } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export interface CreateOrderItem {
  product_variant_id: number;
  quantity: number;
  price: number;
  customization: boolean;
  customization_name: string;
  customization_number: number;
}

export class CreateOrderDto {
  @IsNotEmpty()
  user_id: number;

  @IsNotEmpty()
  address_id: number;

  @IsNotEmpty()
  total: number;

  @IsNotEmpty()
  subtotal: number;

  @IsNotEmpty()
  delivery_fee: number;

  @IsNotEmpty()
  customization_fee: number;

  @IsNotEmpty()
  order_items: CreateOrderItem[];

  @IsNotEmpty()
  payment_method: PaymentMethod;
}
