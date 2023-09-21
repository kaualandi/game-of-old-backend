import { IsNotEmpty } from 'class-validator';

export class TrackingByCodeDto {
  @IsNotEmpty()
  code: string;
}
