import { PaymentMethod } from '@prisma/client';
export declare class CreateOrderDto {
    address_id: number;
    total: number;
    delivery_fee: number;
    delivery_method: 'pac' | 'sedex';
    cart_ids: number[];
    payment_method: PaymentMethod;
    cupom: string;
    card_number: string;
    card_validity: string;
    card_cvv: string;
    card_holder_name: string;
    installments: number;
}
