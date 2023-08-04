import { CreateFilterDto } from './dto/create-filter.dto';
import { UpdateFilterDto } from './dto/update-filter.dto';
import { FiltersService } from './filters.service';
export declare class FiltersController {
    private readonly filtersService;
    constructor(filtersService: FiltersService);
    create(createFilterDto: CreateFilterDto): import(".prisma/client").Prisma.Prisma__FilterClient<{
        id: number;
        name: string;
        category_id: number;
        created_at: Date;
        updated_at: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(name: string, page: string, page_size: string): Promise<{
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
    findOne(id: string): Promise<{
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
    update(id: string, updateFilterDto: UpdateFilterDto): Promise<{
        id: number;
        name: string;
        category_id: number;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        category_id: number;
        created_at: Date;
        updated_at: Date;
    }>;
}
