import { AuthService } from './auth.service';
import { ChangePasswordDto } from './dto/change-password';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(createAuthDto: SignInDto): Promise<{
        access_token: string;
    }>;
    signUp(createUserDto: SignUpDto): Promise<{
        access_token: string;
    }>;
    getMe(request: {
        user_id: string;
    }): Promise<{
        id: number;
        name: string;
        email: string;
        is_admin: boolean;
        created_at: Date;
        updated_at: Date;
        address: (import("@prisma/client/runtime/library").GetResult<{
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
        }, unknown, never> & {})[];
        cart: {
            id: number;
            cart_items: (import("@prisma/client/runtime/library").GetResult<{
                id: number;
                cart_id: number;
                product_variant_id: number;
                quantity: number;
                customization: boolean;
                customization_name: string;
                customization_number: number;
                created_at: Date;
                updated_at: Date;
            }, unknown, never> & {})[];
        };
    }>;
    changePassword(request: {
        user_id: string;
    }, changePasswordDto: ChangePasswordDto): Promise<void>;
    update(request: {
        user_id: string;
    }, updateUserDto: UpdateUserDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        email: string;
        name: string;
        profile_url: string;
        phone: string;
        cpf: string;
        password: string;
        google_id: string;
        birth_date: Date;
        is_admin: boolean;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
}