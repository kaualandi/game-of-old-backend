import { PartialType } from '@nestjs/mapped-types';
import { CreateFilterDto } from './create-filter.dto';

export class UpdateFilterDto extends PartialType(CreateFilterDto) {}
