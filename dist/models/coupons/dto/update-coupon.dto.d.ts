import { CreateCouponDto } from './create-coupon.dto';
declare const UpdateCouponDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCouponDto>>;
export declare class UpdateCouponDto extends UpdateCouponDto_base {
    code: string;
    discount: number;
    is_active: boolean;
}
export {};
