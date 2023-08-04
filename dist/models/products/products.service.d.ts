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
    findAll(name: string, page: number, page_size: number): Promise<{
        count: number;
        results: ({
            _count: {
                team: number;
                variants: number;
                images: number;
                filters: number;
                avaliations: number;
            };
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
    findOne(id: number): Promise<{
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
    update(id: number, updateProductDto: UpdateProductDto): Promise<{
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
    remove(id: number): Promise<{
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
