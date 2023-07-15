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
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    findAll(name: string): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        description: string;
        base_price: number;
        trending: boolean;
        discount: number;
        team_id: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {})[]>;
    findOne(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        description: string;
        base_price: number;
        trending: boolean;
        discount: number;
        team_id: number;
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
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
}
