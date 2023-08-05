import { UsersService } from '../users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import { ChangePasswordDto } from './dto/change-password';
import { SignUpDto } from './dto/sign-up.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(createAuthDto: SignInDto): Promise<{
        access_token: string;
    }>;
    signUp(createUserDto: SignUpDto): Promise<{
        access_token: string;
    }>;
    getMe(id: string): Promise<{
        address: {
            id: number;
            user_id: number;
            zip_code: string;
            state: string;
            city: string;
            neighborhood: string;
            street: string;
            number: string;
            complement: string;
            created_at: Date;
            updated_at: Date;
        }[];
        cart: {
            id: number;
            cart_items: {
                id: number;
                cart_id: number;
                product_variant_id: number;
                quantity: number;
                customization: boolean;
                customization_name: string;
                customization_number: number;
                created_at: Date;
                updated_at: Date;
            }[];
        };
        email: string;
        name: string;
        phone: string;
        cpf: string;
        birth_date: Date;
        is_admin: boolean;
        id: number;
        profile_url: string;
        created_at: Date;
        updated_at: Date;
    }>;
    changePassword(id: string, changePasswordDto: ChangePasswordDto): Promise<void>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        address: {
            id: number;
            user_id: number;
            zip_code: string;
            state: string;
            city: string;
            neighborhood: string;
            street: string;
            number: string;
            complement: string;
            created_at: Date;
            updated_at: Date;
        }[];
        cart: {
            id: number;
            cart_items: {
                id: number;
                cart_id: number;
                product_variant_id: number;
                quantity: number;
                customization: boolean;
                customization_name: string;
                customization_number: number;
                created_at: Date;
                updated_at: Date;
            }[];
        };
        email: string;
        name: string;
        phone: string;
        cpf: string;
        birth_date: Date;
        is_admin: boolean;
        id: number;
        profile_url: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
