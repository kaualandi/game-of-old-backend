import { CreateFilterDto } from './create-filter.dto';
declare const UpdateFilterDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateFilterDto>>;
export declare class UpdateFilterDto extends UpdateFilterDto_base {
    name: string;
    category_id: number;
}
export {};
