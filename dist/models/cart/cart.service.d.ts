import { UsersService } from './../users/users.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from 'src/modules/prisma';
export declare class CartService {
    private readonly prismaService;
    private readonly usersService;
    constructor(prismaService: PrismaService, usersService: UsersService);
    create(createCartDto: CreateCartDto, user_id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        cart_id: number;
        product_variant_id: number;
        quantity: number;
        customization: boolean;
        customization_name: string;
        customization_number: number;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    findAll(user_id: number): Promise<({
        product_variant: {
            product: import("@prisma/client/runtime/library").GetResult<{
                id: number;
                name: string;
                description: string;
                base_price: number;
                trending: boolean;
                discount: number;
                team_id: number;
                sold: number;
                is_active: boolean;
                created_at: Date;
                updated_at: Date;
            }, unknown, never> & {};
        } & import("@prisma/client/runtime/library").GetResult<{
            id: number;
            product_id: number;
            name: string;
            is_active: boolean;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {};
    } & import("@prisma/client/runtime/library").GetResult<{
        id: number;
        cart_id: number;
        product_variant_id: number;
        quantity: number;
        customization: boolean;
        customization_name: string;
        customization_number: number;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {})[]>;
    findOne(id: number, user_id: number): Promise<{
        product_variant: {
            product: import("@prisma/client/runtime/library").GetResult<{
                id: number;
                name: string;
                description: string;
                base_price: number;
                trending: boolean;
                discount: number;
                team_id: number;
                sold: number;
                is_active: boolean;
                created_at: Date;
                updated_at: Date;
            }, unknown, never> & {};
        } & import("@prisma/client/runtime/library").GetResult<{
            id: number;
            product_id: number;
            name: string;
            is_active: boolean;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {};
    } & import("@prisma/client/runtime/library").GetResult<{
        id: number;
        cart_id: number;
        product_variant_id: number;
        quantity: number;
        customization: boolean;
        customization_name: string;
        customization_number: number;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    update(id: number, updateCartDto: UpdateCartDto, user_id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        cart_id: number;
        product_variant_id: number;
        quantity: number;
        customization: boolean;
        customization_name: string;
        customization_number: number;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    remove(id: number, user_id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        cart_id: number;
        product_variant_id: number;
        quantity: number;
        customization: boolean;
        customization_name: string;
        customization_number: number;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
}
