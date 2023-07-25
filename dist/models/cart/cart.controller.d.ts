import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { AuthRequest } from 'src/common/guards/auth.guard';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    create(createCartDto: CreateCartDto, request: AuthRequest): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    findAll(request: AuthRequest): Promise<({
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
    findOne(id: string, request: AuthRequest): Promise<{
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
    update(id: string, updateCartDto: UpdateCartDto, request: AuthRequest): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    remove(id: string, request: AuthRequest): Promise<import("@prisma/client/runtime/library").GetResult<{
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
