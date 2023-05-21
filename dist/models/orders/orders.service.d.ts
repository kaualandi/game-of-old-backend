import { PrismaService } from 'src/modules/prisma';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createOrderDto: CreateOrderDto): Promise<import(".prisma/client").Order>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Order & {
        _count: import(".prisma/client").Prisma.OrderCountOutputType;
        order_items: import(".prisma/client").OrderItem[];
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").Order & {
        _count: import(".prisma/client").Prisma.OrderCountOutputType;
        order_items: import(".prisma/client").OrderItem[];
    }>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<import(".prisma/client").Order>;
    remove(id: number): Promise<import(".prisma/client").Order>;
}
