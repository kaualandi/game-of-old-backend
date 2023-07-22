import { IsNotEmpty } from 'class-validator';

export class CreateBannerDto {
  @IsNotEmpty()
  image: string;
}
