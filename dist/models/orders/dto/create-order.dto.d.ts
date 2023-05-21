export interface CreateOrderItem {
    product_id: number;
    quantity: number;
    price: number;
}
export declare class CreateOrderDto {
    user_id: number;
    status: string;
    total: number;
    order_items: CreateOrderItem[];
}
