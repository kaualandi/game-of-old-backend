import { CreateCartDto } from './create-cart.dto';
declare const UpdateCartDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCartDto>>;
export declare class UpdateCartDto extends UpdateCartDto_base {
    quantity?: number;
    customization?: boolean;
    customization_name?: string;
    customization_number?: number;
}
export {};
