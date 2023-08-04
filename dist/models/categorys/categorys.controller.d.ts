import { CategorysService } from './categorys.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategorysController {
    private readonly categorysService;
    constructor(categorysService: CategorysService);
    create(createCategoryDto: CreateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
        section_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(name: string, page: string, page_size: string): Promise<{
        count: number;
        results: ({
            section: {
                id: number;
                name: string;
                created_at: Date;
                updated_at: Date;
            };
            _count: {
                filters: number;
                section: number;
            };
            filters: {
                id: number;
                name: string;
                category_id: number;
                created_at: Date;
                updated_at: Date;
            }[];
        } & {
            id: number;
            name: string;
            created_at: Date;
            updated_at: Date;
            section_id: number;
        })[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: string): Promise<{
        section: {
            id: number;
            name: string;
            created_at: Date;
            updated_at: Date;
        };
        _count: {
            filters: number;
            section: number;
        };
        filters: {
            id: number;
            name: string;
            category_id: number;
            created_at: Date;
            updated_at: Date;
        }[];
    } & {
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
        section_id: number;
    }>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
        section_id: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
        section_id: number;
    }>;
}
