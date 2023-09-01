import { PrismaService } from 'src/modules/prisma';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrePriceDto } from './dto/pre-price.dto';
export declare class OrdersService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createOrderDto: CreateOrderDto): Promise<{
        worked: boolean;
        status: string;
        order_id: number;
        qr_code: any;
    }>;
    findAll(page: number, page_size: number): Promise<{
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
    findOne(id: number): Promise<{
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
    }, unknown, never> & {}>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    remove(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    cancel(id: number, user_id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    pricePrice(prePriceDto: PrePriceDto, user_id: number): Promise<{
        total_with_discount: number;
        total_without_discount: number;
        total_customizations: number;
        total_discount: number;
    }>;
}
