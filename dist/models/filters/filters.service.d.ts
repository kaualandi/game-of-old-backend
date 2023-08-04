import { CreateFilterDto } from './dto/create-filter.dto';
import { UpdateFilterDto } from './dto/update-filter.dto';
import { PrismaService } from 'src/modules/prisma';
export declare class FiltersService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createFilterDto: CreateFilterDto): import(".prisma/client").Prisma.Prisma__FilterClient<{
        id: number;
        name: string;
        category_id: number;
        created_at: Date;
        updated_at: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(name: string, page: number, page_size: number): Promise<{
        count: number;
        results: ({
            category: {
                id: number;
                name: string;
                created_at: Date;
                updated_at: Date;
                section_id: number;
            };
            products: {
                id: number;
                product_id: number;
                filter_id: number;
                created_at: Date;
                updated_at: Date;
            }[];
        } & {
            id: number;
            name: string;
            category_id: number;
            created_at: Date;
            updated_at: Date;
        })[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: number): Promise<{
        category: {
            id: number;
            name: string;
            created_at: Date;
            updated_at: Date;
            section_id: number;
        };
        products: {
            id: number;
            product_id: number;
            filter_id: number;
            created_at: Date;
            updated_at: Date;
        }[];
    } & {
        id: number;
        name: string;
        category_id: number;
        created_at: Date;
        updated_at: Date;
    }>;
    update(id: number, updateFilterDto: UpdateFilterDto): Promise<{
        id: number;
        name: string;
        category_id: number;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        category_id: number;
        created_at: Date;
        updated_at: Date;
    }>;
}
