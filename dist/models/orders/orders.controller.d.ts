import { AuthRequest } from 'src/common/guards/auth.guard';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';
import { PrePriceDto } from './dto/pre-price.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto, request: {
        user_id: string;
    }): Promise<{
        worked: boolean;
        status: string;
        order_id: number;
    }>;
    findAll(page: string, page_size: string): Promise<{
        count: number;
        results: ({
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
            _count: {
                user: number;
                address: number;
                cupom: number;
                order_items: number;
            };
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
        }, unknown, never> & {})[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: string): Promise<{
        order_items: ({
            product_variant: {
                product: {
                    images: (import("@prisma/client/runtime/library").GetResult<{
                        id: number;
                        product_id: number;
                        url: string;
                        created_at: Date;
                        updated_at: Date;
                    }, unknown, never> & {})[];
                } & import("@prisma/client/runtime/library").GetResult<{
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
        _count: {
            user: number;
            address: number;
            cupom: number;
            order_items: number;
        };
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
    }, unknown, never> & {}>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown, never> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown, never> & {}>;
    cancel(id: string, request: AuthRequest): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown, never> & {}>;
    prePrice(prePriceDto: PrePriceDto, request: {
        user_id: string;
    }): Promise<{
        total_with_discount: number;
        total_without_discount: number;
        total_customizations: number;
        total_discount: number;
        items: ({
            product_variant: {
                product: {
                    images: (import("@prisma/client/runtime/library").GetResult<{
                        id: number;
                        product_id: number;
                        url: string;
                        created_at: Date;
                        updated_at: Date;
                    }, unknown, never> & {})[];
                } & import("@prisma/client/runtime/library").GetResult<{
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
        }, unknown, never> & {})[];
        cupom_status: boolean;
        cupom_discount: number;
    }>;
    pay(): Promise<any>;
}
