import { Address } from '@prisma/client';
export declare class CreateUserDto {
    email: string;
    name: string;
    phone: string;
    cpf: string;
    password: string;
    google_id: string;
    birth_date: Date;
    is_admin: boolean;
    address?: Address;
}
