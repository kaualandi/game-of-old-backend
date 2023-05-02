import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class RemoveExtraKeysPipe implements PipeTransform {
    private readonly allowedKeys;
    constructor(allowedKeys: string[]);
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
