import { CreateVariantsDto } from './dto/create-variants.dto';
import { UpdateVariantsDto } from './dto/update-variants.dto';
import { VariantsService } from './variants.service';
export declare class VariantsController {
    private readonly variantService;
    constructor(variantService: VariantsService);
    create(createVariationDto: CreateVariantsDto): Promise<{
        id: number;
        product_id: number;
        name: string;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    findAll(name: string): import(".prisma/client").Prisma.PrismaPromise<({
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
        name: string;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    })[]>;
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
        name: string;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    update(id: string, updateVariationDto: UpdateVariantsDto): Promise<{
        id: number;
        product_id: number;
        name: string;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        product_id: number;
        name: string;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
}
