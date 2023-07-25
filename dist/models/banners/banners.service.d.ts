import { CreateBannerDto } from './dto/create-banner.dto';
import { S3Service } from 'src/modules/aws/s3/s3.service';
import { PrismaService } from 'src/modules/prisma';
export declare class BannersService {
    private readonly s3Service;
    private readonly prismaService;
    constructor(s3Service: S3Service, prismaService: PrismaService);
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
    findOne(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        image: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }, unknown, never> & {}>;
    remove(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        image: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }, unknown, never> & {}>;
}
