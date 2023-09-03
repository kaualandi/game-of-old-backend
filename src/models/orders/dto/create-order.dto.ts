import { PaymentMethod } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  address_id: number;

  @IsNotEmpty()
  total: number;

  @IsNotEmpty()
  delivery_fee: number;

  @IsNotEmpty()
  delivery_method: 'pac' | 'sedex';

  @IsNotEmpty()
  cart_ids: number[];

  @IsNotEmpty()
  payment_method: PaymentMethod;

  cupom: string;

  card_number: string;
  card_validity: string;
  card_cvv: string;
  card_holder_name: string;
  installments: number;
}
