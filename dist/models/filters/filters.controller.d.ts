import { CreateFilterDto } from './dto/create-filter.dto';
import { UpdateFilterDto } from './dto/update-filter.dto';
import { FiltersService } from './filters.service';
export declare class FiltersController {
    private readonly filtersService;
    constructor(filtersService: FiltersService);
    create(createFilterDto: CreateFilterDto): import(".prisma/client").Prisma.Prisma__FilterClient<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        category_id: number;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(name: string, page: string, page_size: string): Promise<{
        count: number;
        results: (import("@prisma/client/runtime/library").GetResult<{
            id: number;
            name: string;
            category_id: number;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {})[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: string): Promise<{
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
    update(id: string, updateFilterDto: UpdateFilterDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        category_id: number;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        category_id: number;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
}
