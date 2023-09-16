import { PrismaService } from './../../modules/prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import { ChangePasswordDto } from './dto/change-password';
import { SignUpDto } from './dto/sign-up.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class AuthService {
    private usersService;
    private prismaService;
    private jwtService;
    constructor(usersService: UsersService, prismaService: PrismaService, jwtService: JwtService);
    private itemsToCalcRegisterPercent;
    signIn(createAuthDto: SignInDto): Promise<{
        access_token: string;
    }>;
    signUp(createUserDto: SignUpDto): Promise<{
        access_token: string;
    }>;
    getMe(id: string): Promise<{
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
            is_active: boolean;
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
    changePassword(id: string, changePasswordDto: ChangePasswordDto): Promise<void>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
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
            is_active: boolean;
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
    accountResume(id: number): Promise<{
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
                is_active: boolean;
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
                is_active: boolean;
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
    accountOrders(id: number): Promise<({
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
            is_active: boolean;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {};
        order_items: (import("@prisma/client/runtime/library").GetResult<{
            id: number;
            order_id: number;
            product_variant_id: number;
            price: number;
            quantity: number;
            customization: boolean;
            customization_name: string;
            customization_number: number;
            customization_price: number;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {})[];
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
    }, unknown, never> & {})[]>;
    private calcUserPercent;
}
