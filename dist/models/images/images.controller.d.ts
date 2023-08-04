import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
export declare class ImagesController {
    private readonly imagesService;
    constructor(imagesService: ImagesService);
    create(createImageDto: CreateImageDto): Promise<{
        id: number;
        product_id: number;
        url: string;
        created_at: Date;
        updated_at: Date;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        product_id: number;
        url: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findOne(id: string): Promise<{
        product: {
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
        };
    } & {
        id: number;
        product_id: number;
        url: string;
        created_at: Date;
        updated_at: Date;
    }>;
    update(id: string, updateImageDto: UpdateImageDto): Promise<{
        id: number;
        product_id: number;
        url: string;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        product_id: number;
        url: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
