import { S3Service } from './../../modules/aws/s3/s3.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { PrismaService } from 'src/modules/prisma';
export declare class ImagesService {
    private readonly prismaService;
    private readonly s3Service;
    constructor(prismaService: PrismaService, s3Service: S3Service);
    saveImage(url: string): Promise<string>;
    create(createImageDto: CreateImageDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        product_id: number;
        url: string;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime/library").GetResult<{
        id: number;
        product_id: number;
        url: string;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {})[]>;
    findOne(id: number): Promise<{
        product: import("@prisma/client/runtime/library").GetResult<{
            id: number;
            name: string;
            description: string;
            base_price: number;
            trending: boolean;
            discount: number;
            team_id: number;
            sold: number;
            is_active: boolean;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {};
    } & import("@prisma/client/runtime/library").GetResult<{
        id: number;
        product_id: number;
        url: string;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    update(id: number, updateImageDto: UpdateImageDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        product_id: number;
        url: string;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    remove(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        product_id: number;
        url: string;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
}
