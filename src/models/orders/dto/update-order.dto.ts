import { PartialType } from '@nestjs/mapped-types';
import { OrderStatus, PaymentMethod } from '@prisma/client';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  tracking_number: string;
  status: OrderStatus;
  cancelled_reason: string;
  payment_method: PaymentMethod;
  payment_id: string;
  installments: number;
  coupon_id: number;
}
