import { BannersService } from './banners.service';
import { CreateBannerDto } from './dto/create-banner.dto';
export declare class BannersController {
    private readonly bannersService;
    constructor(bannersService: BannersService);
    create(createBannerDto: CreateBannerDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        image: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }, unknown, never> & {}>;
    findAll(page: number, page_size: number): Promise<{
        count: number;
        results: (import("@prisma/client/runtime/library").GetResult<{
            id: number;
            image: string;
            created_at: Date;
            updated_at: Date;
            config_id: number;
        }, unknown, never> & {})[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        image: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }, unknown, never> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        image: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }, unknown, never> & {}>;
}
