import { PrismaService } from 'src/modules/prisma';
import { CreateVariantsDto } from './dto/create-variants.dto';
import { UpdateVariantsDto } from './dto/update-variants.dto';
export declare class VariantsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createVariantsDto: CreateVariantsDto): Promise<{
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
    findOne(id: number): Promise<{
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
    update(id: number, updateVariantsDto: UpdateVariantsDto): Promise<{
        id: number;
        product_id: number;
        name: string;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        product_id: number;
        name: string;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
}
