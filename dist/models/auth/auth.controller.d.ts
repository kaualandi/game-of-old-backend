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
        phone: string;
        profile_url: string;
        cpf: string;
        birth_date: Date;
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
    }, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        name: string;
        email: string;
        phone: string;
        profile_url: string;
        cpf: string;
        birth_date: Date;
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
    accountResume(request: {
        user_id: string;
    }): Promise<{
        user: {
            id: number;
            name: string;
            email: string;
            phone: string;
            profile_url: string;
            cpf: string;
            birth_date: Date;
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
        };
        last_order: {
            address: import("@prisma/client/runtime/library").GetResult<{
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
            }, unknown, never> & {};
        } & import("@prisma/client/runtime/library").GetResult<{
            id: number;
            user_id: number;
            address_id: number;
            subtotal: number;
            delivery_fee: number;
            customization_fee: number;
            total: number;
            tracking_number: string;
            status: import(".prisma/client").OrderStatus;
            cancelled_reason: string;
            payment_method: import(".prisma/client").PaymentMethod;
            payment_id: string;
            installments: number;
            coupon_id: number;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {};
        user_register_percent: number;
        user_register_text_status: string;
    }>;
}
