import { CreateImageDto } from './create-image.dto';
declare const UpdateImageDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateImageDto>>;
export declare class UpdateImageDto extends UpdateImageDto_base {
    url: string;
    product_id: number;
}
export {};
