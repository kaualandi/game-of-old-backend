import { CreateVariationsDto } from './create-variations.dto';
declare const UpdateVariationsDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateVariationsDto>>;
export declare class UpdateVariationsDto extends UpdateVariationsDto_base {
    name: string;
    price: number;
    image: string;
    product_id: number;
}
export {};
