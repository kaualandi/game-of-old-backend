import { IsNotEmpty } from 'class-validator';

export class CreateMeasureDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  abbreviation: string;
}
