import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
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
    findAll(name: string, page: string, page_size: string): Promise<{
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
            filters: (import("@prisma/client/runtime/library").GetResult<{
                id: number;
                product_id: number;
                filter_id: number;
                created_at: Date;
                updated_at: Date;
            }, unknown, never> & {})[];
            team: import("@prisma/client/runtime/library").GetResult<{
                id: number;
                name: string;
                url: string;
                created_at: Date;
                updated_at: Date;
            }, unknown, never> & {};
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
    findOne(id: string): Promise<{
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
        team: import("@prisma/client/runtime/library").GetResult<{
            id: number;
            name: string;
            url: string;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {};
        filters: (import("@prisma/client/runtime/library").GetResult<{
            id: number;
            product_id: number;
            filter_id: number;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {})[];
        avaliations: (import("@prisma/client/runtime/library").GetResult<{
            id: number;
            user_id: number;
            product_id: number;
            rating: number;
            comment: string;
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
    update(id: string, updateProductDto: UpdateProductDto): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
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
