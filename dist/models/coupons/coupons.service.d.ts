import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { PrismaService } from 'src/modules/prisma';
export declare class CouponsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createCouponDto: CreateCouponDto): Promise<{
        id: number;
        code: string;
        discount: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    findAll(name: string, page: number, page_size: number): Promise<{
        count: number;
        results: {
            id: number;
            code: string;
            discount: number;
            is_active: boolean;
            created_at: Date;
            updated_at: Date;
        }[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: number): Promise<{
        id: number;
        code: string;
        discount: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    update(id: number, updateCouponDto: UpdateCouponDto): Promise<{
        id: number;
        code: string;
        discount: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        code: string;
        discount: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    private findByCode;
}
