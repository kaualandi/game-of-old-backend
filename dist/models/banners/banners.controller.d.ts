import { BannersService } from './banners.service';
import { CreateBannerDto } from './dto/create-banner.dto';
export declare class BannersController {
    private readonly bannersService;
    constructor(bannersService: BannersService);
    create(createBannerDto: CreateBannerDto): Promise<{
        id: number;
        image: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }>;
    findAll(page: number, page_size: number): Promise<{
        count: number;
        results: {
            id: number;
            image: string;
            created_at: Date;
            updated_at: Date;
            config_id: number;
        }[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: string): Promise<{
        id: number;
        image: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        image: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }>;
}
