import { CouponsService } from './coupons.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
export declare class CouponsController {
    private readonly couponsService;
    constructor(couponsService: CouponsService);
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
    findOne(id: string): Promise<{
        id: number;
        code: string;
        discount: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    update(id: string, updateCouponDto: UpdateCouponDto): Promise<{
        id: number;
        code: string;
        discount: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        code: string;
        discount: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
}
