import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    email: string;
    name: string;
    phone: string;
    cpf: string;
    password: string;
    google_id: string;
    birth_date: Date;
    is_admin: boolean;
}
export {};
