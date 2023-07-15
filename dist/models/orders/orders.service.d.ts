import { PrismaService } from 'src/modules/prisma';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createOrderDto: CreateOrderDto): Promise<import("@prisma/client/runtime/library").GetResult<{
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
        created_at: Date;
        updated_at: Date;
        couponId: number;
    }, unknown, never> & {}>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        order_items: (import("@prisma/client/runtime/library").GetResult<{
            id: number;
            order_id: number;
            product_variant_id: number;
            price: number;
            quantity: number;
            customization: boolean;
            customization_name: string;
            customization_number: number;
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
        created_at: Date;
        updated_at: Date;
        couponId: number;
    }, unknown, never> & {})[]>;
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
        created_at: Date;
        updated_at: Date;
        couponId: number;
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
        created_at: Date;
        updated_at: Date;
        couponId: number;
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
        created_at: Date;
        updated_at: Date;
        couponId: number;
    }, unknown, never> & {}>;
}
