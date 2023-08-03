import { CategorysService } from './categorys.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategorysController {
    private readonly categorysService;
    constructor(categorysService: CategorysService);
    create(createCategoryDto: CreateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
        section_id: number;
    }, unknown, never> & {}, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(name: string, page: string, page_size: string): Promise<{
        count: number;
        results: ({
            _count: {
                filters: number;
                section: number;
            };
        } & import("@prisma/client/runtime/library").GetResult<{
            id: number;
            name: string;
            created_at: Date;
            updated_at: Date;
            section_id: number;
        }, unknown, never> & {})[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: string): Promise<{
        filters: (import("@prisma/client/runtime/library").GetResult<{
            id: number;
            name: string;
            category_id: number;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {})[];
        _count: {
            filters: number;
            section: number;
        };
    } & import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
        section_id: number;
    }, unknown, never> & {}>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
        section_id: number;
    }, unknown, never> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
        section_id: number;
    }, unknown, never> & {}>;
}
