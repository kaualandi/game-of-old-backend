import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
export declare class ImagesController {
    private readonly imagesService;
    constructor(imagesService: ImagesService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateImageDto: UpdateImageDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        product_id: number;
        url: string;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        product_id: number;
        url: string;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
}
