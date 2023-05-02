import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class UpperCasePipe implements PipeTransform {
    transform(value: {
        payload: string[];
    }, metadata: ArgumentMetadata): string[];
}
