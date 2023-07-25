import { PrismaService } from 'src/modules/prisma';
import { VariantsService } from '../variants/variants.service';
import { ImagesService } from './../images/images.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsService {
    private readonly prismaService;
    private readonly imagesService;
    private readonly variantsService;
    constructor(prismaService: PrismaService, imagesService: ImagesService, variantsService: VariantsService);
    create(createProductDto: CreateProductDto): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown, never> & {}>;
    findAll(name: string, page: number, page_size: number): Promise<{
        count: number;
        results: ({
            images: (import("@prisma/client/runtime/library").GetResult<{
                id: number;
                product_id: number;
                url: string;
                created_at: Date;
                updated_at: Date;
            }, unknown, never> & {})[];
            variants: (import("@prisma/client/runtime/library").GetResult<{
                id: number;
                product_id: number;
                name: string;
                is_active: boolean;
                created_at: Date;
                updated_at: Date;
            }, unknown, never> & {})[];
            _count: {
                team: number;
                variants: number;
                images: number;
                filters: number;
                avaliations: number;
            };
        } & import("@prisma/client/runtime/library").GetResult<{
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
        }, unknown, never> & {})[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: number): Promise<{
        images: (import("@prisma/client/runtime/library").GetResult<{
            id: number;
            product_id: number;
            url: string;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {})[];
        variants: (import("@prisma/client/runtime/library").GetResult<{
            id: number;
            product_id: number;
            name: string;
            is_active: boolean;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {})[];
    } & import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown, never> & {}>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown, never> & {}>;
    remove(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown, never> & {}>;
}
