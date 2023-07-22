import { IsNotEmpty } from 'class-validator';

export class CreateCouponDto {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  discount: number;

  is_active: boolean;
}
