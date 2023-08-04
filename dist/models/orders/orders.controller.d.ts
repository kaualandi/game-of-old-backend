import { AuthRequest } from 'src/common/guards/auth.guard';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<{
        worked: boolean;
        status: string;
        order_id: number;
        qr_code: any;
    }>;
    findAll(page: string, page_size: string): Promise<{
        count: number;
        results: ({
            _count: {
                user: number;
                address: number;
                cupom: number;
                order_items: number;
            };
            order_items: {
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
            }[];
        } & {
            id: number;
            user_id: number;
            address_id: number;
            subtotal: number;
            delivery_fee: number;
            customization_fee: number;
            total: number;
            tracking_number: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            cancelled_reason: string;
            payment_method: import(".prisma/client").$Enums.PaymentMethod;
            payment_id: string;
            installments: number;
            coupon_id: number;
            created_at: Date;
            updated_at: Date;
        })[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: string): Promise<{
        _count: {
            user: number;
            address: number;
            cupom: number;
            order_items: number;
        };
        order_items: {
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
        }[];
    } & {
        id: number;
        user_id: number;
        address_id: number;
        subtotal: number;
        delivery_fee: number;
        customization_fee: number;
        total: number;
        tracking_number: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        cancelled_reason: string;
        payment_method: import(".prisma/client").$Enums.PaymentMethod;
        payment_id: string;
        installments: number;
        coupon_id: number;
        created_at: Date;
        updated_at: Date;
    }>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<{
        id: number;
        user_id: number;
        address_id: number;
        subtotal: number;
        delivery_fee: number;
        customization_fee: number;
        total: number;
        tracking_number: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        cancelled_reason: string;
        payment_method: import(".prisma/client").$Enums.PaymentMethod;
        payment_id: string;
        installments: number;
        coupon_id: number;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        user_id: number;
        address_id: number;
        subtotal: number;
        delivery_fee: number;
        customization_fee: number;
        total: number;
        tracking_number: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        cancelled_reason: string;
        payment_method: import(".prisma/client").$Enums.PaymentMethod;
        payment_id: string;
        installments: number;
        coupon_id: number;
        created_at: Date;
        updated_at: Date;
    }>;
    cancel(id: string, request: AuthRequest): Promise<{
        id: number;
        user_id: number;
        address_id: number;
        subtotal: number;
        delivery_fee: number;
        customization_fee: number;
        total: number;
        tracking_number: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        cancelled_reason: string;
        payment_method: import(".prisma/client").$Enums.PaymentMethod;
        payment_id: string;
        installments: number;
        coupon_id: number;
        created_at: Date;
        updated_at: Date;
    }>;
}
