import { PartialType } from '@nestjs/mapped-types';
import { CreateCouponDto } from './create-coupon.dto';

export class UpdateCouponDto extends PartialType(CreateCouponDto) {
  code: string;
  discount: number;
  is_active: boolean;
}
