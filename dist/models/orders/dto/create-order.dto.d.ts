import { PaymentMethod } from '@prisma/client';
export interface CreateOrderItem {
    product_variant_id: number;
    quantity: number;
    price: number;
    customization: boolean;
    customization_name: string;
    customization_number: number;
}
export declare class CreateOrderDto {
    user_id: number;
    address_id: number;
    total: number;
    subtotal: number;
    delivery_fee: number;
    customization_fee: number;
    order_items: CreateOrderItem[];
    payment_method: PaymentMethod;
    card_number: string;
    card_validity: string;
    card_cvv: string;
    card_holder_name: string;
    installments: number;
}
