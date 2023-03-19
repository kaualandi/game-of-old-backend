import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class UpperCasePipe implements PipeTransform {
  transform(value: { payload: string[] }, metadata: ArgumentMetadata) {
    if (Array.isArray(value.payload) && metadata.type === 'body') {
      return value.payload.map((val: string) => val.toUpperCase());
    }
    throw new BadRequestException('Invalid payload');
  }
}
