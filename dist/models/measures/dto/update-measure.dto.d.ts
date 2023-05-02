import { CreateMeasureDto } from './create-measure.dto';
declare const UpdateMeasureDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateMeasureDto>>;
export declare class UpdateMeasureDto extends UpdateMeasureDto_base {
    name: string;
    abbreviation: string;
}
export {};
