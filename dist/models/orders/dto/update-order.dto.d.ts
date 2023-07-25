import { OrderStatus, PaymentMethod } from '@prisma/client';
import { CreateOrderDto } from './create-order.dto';
declare const UpdateOrderDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateOrderDto>>;
export declare class UpdateOrderDto extends UpdateOrderDto_base {
    tracking_number: string;
    status: OrderStatus;
    cancelled_reason: string;
    payment_method: PaymentMethod;
    payment_id: string;
    installments: number;
    coupon_id: number;
}
export {};
