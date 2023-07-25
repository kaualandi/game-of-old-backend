import { CreateTagDto } from './create-tag.dto';
declare const UpdateTagDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTagDto>>;
export declare class UpdateTagDto extends UpdateTagDto_base {
    name: string;
    icon: string;
}
export {};
