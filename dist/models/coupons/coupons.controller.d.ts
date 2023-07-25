import { CouponsService } from './coupons.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
export declare class CouponsController {
    private readonly couponsService;
    constructor(couponsService: CouponsService);
    create(createCouponDto: CreateCouponDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        code: string;
        discount: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    findAll(name: string, page: number, page_size: number): Promise<{
        count: number;
        results: (import("@prisma/client/runtime/library").GetResult<{
            id: number;
            code: string;
            discount: number;
            is_active: boolean;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {})[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        code: string;
        discount: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    update(id: string, updateCouponDto: UpdateCouponDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        code: string;
        discount: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        code: string;
        discount: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
}
