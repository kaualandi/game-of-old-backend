import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<{
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
    }>;
    findAll(name: string, page: string, page_size: string): Promise<{
        count: number;
        results: ({
            _count: {
                team: number;
                variants: number;
                images: number;
                filters: number;
                avaliations: number;
            };
            filters: {
                id: number;
                product_id: number;
                filter_id: number;
                created_at: Date;
                updated_at: Date;
            }[];
            variants: {
                id: number;
                product_id: number;
                name: string;
                is_active: boolean;
                created_at: Date;
                updated_at: Date;
            }[];
            images: {
                id: number;
                product_id: number;
                url: string;
                created_at: Date;
                updated_at: Date;
            }[];
        } & {
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
        })[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: string): Promise<{
        filters: {
            id: number;
            product_id: number;
            filter_id: number;
            created_at: Date;
            updated_at: Date;
        }[];
        variants: {
            id: number;
            product_id: number;
            name: string;
            is_active: boolean;
            created_at: Date;
            updated_at: Date;
        }[];
        images: {
            id: number;
            product_id: number;
            url: string;
            created_at: Date;
            updated_at: Date;
        }[];
    } & {
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
    }>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
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
    }>;
    remove(id: string): Promise<{
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
    }>;
}
