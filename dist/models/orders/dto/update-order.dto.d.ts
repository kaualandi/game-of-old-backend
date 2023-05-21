import { CreateOrderDto, CreateOrderItem } from './create-order.dto';
export interface UpdateOrderItem extends CreateOrderItem {
    id?: number;
}
declare const UpdateOrderDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateOrderDto>>;
export declare class UpdateOrderDto extends UpdateOrderDto_base {
    user_id: number;
    status: string;
    total: number;
    order_items: UpdateOrderItem[];
}
export {};
