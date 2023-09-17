import { ContactBack } from '@prisma/client';
export declare class CreateContactDto {
    name: string;
    phone: string;
    contact_back: ContactBack;
    subject: string;
    message: string;
    email: string;
}
