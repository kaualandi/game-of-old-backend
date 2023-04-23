import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class RemoveExtraKeysPipe implements PipeTransform {
  constructor(private readonly allowedKeys: string[]) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type !== 'body') {
      return value;
    }

    // Cria uma instância da classe DTO apenas com as chaves permitidas
    const filteredObject = {};
    for (const key of this.allowedKeys) {
      if (key in value) {
        filteredObject[key] = value[key];
      }
    }
    const object = plainToClass(metadata.metatype, filteredObject);

    // Valida a instância da classe DTO
    const errors = await validate(object);

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    return filteredObject;
  }
}
