import { CreateVariantsDto } from './create-variants.dto';
declare const UpdateVariantsDto_base: import('@nestjs/mapped-types').MappedType<
  Partial<CreateVariantsDto>
>;
export declare class UpdateVariantsDto extends UpdateVariantsDto_base {
  name: string;
  price: number;
  image: string;
  product_id: number;
}
export {};
