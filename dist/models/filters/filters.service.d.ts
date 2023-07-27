import { CreateFilterDto } from './dto/create-filter.dto';
import { UpdateFilterDto } from './dto/update-filter.dto';
import { PrismaService } from 'src/modules/prisma';
export declare class FiltersService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createFilterDto: CreateFilterDto): import(".prisma/client").Prisma.Prisma__FilterClient<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        category_id: number;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(name: string, page: number, page_size: number): Promise<{
        count: number;
        results: ({
            category: import("@prisma/client/runtime/library").GetResult<{
                id: number;
                name: string;
                created_at: Date;
                updated_at: Date;
            }, unknown, never> & {};
            products: (import("@prisma/client/runtime/library").GetResult<{
                id: number;
                product_id: number;
                filter_id: number;
                created_at: Date;
                updated_at: Date;
            }, unknown, never> & {})[];
        } & import("@prisma/client/runtime/library").GetResult<{
            id: number;
            name: string;
            category_id: number;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {})[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: number): Promise<{
        category: import("@prisma/client/runtime/library").GetResult<{
            id: number;
            name: string;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {};
        products: (import("@prisma/client/runtime/library").GetResult<{
            id: number;
            product_id: number;
            filter_id: number;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {})[];
    } & import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        category_id: number;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    update(id: number, updateFilterDto: UpdateFilterDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        category_id: number;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    remove(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        category_id: number;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
}
