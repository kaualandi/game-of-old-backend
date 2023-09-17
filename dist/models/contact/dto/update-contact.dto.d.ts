import { CreateContactDto } from './create-contact.dto';
declare const UpdateContactDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateContactDto>>;
export declare class UpdateContactDto extends UpdateContactDto_base {
    opened: boolean;
    read: boolean;
    conclusion: string;
}
export {};
