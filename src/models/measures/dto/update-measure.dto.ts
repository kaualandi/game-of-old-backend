import { PartialType } from '@nestjs/mapped-types';
import { CreateMeasureDto } from './create-measure.dto';

export class UpdateMeasureDto extends PartialType(CreateMeasureDto) {
  name: string;
  abbreviation: string;
}
