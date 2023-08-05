import { Address } from '@prisma/client';
export declare class UpdateUserDto {
    email: string;
    name: string;
    phone: string;
    cpf: string;
    birth_date: Date;
    is_admin: boolean;
    profile_url: string;
    address: Address;
    google_id: string;
    password: string;
}
