import { PrismaService } from './../../modules/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategorysService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createCategoryDto: CreateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
        section_id: number;
    }, unknown, never> & {}, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(name: string, page: number, page_size: number): Promise<{
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
    findOne(id: number): Promise<{
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
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
        section_id: number;
    }, unknown, never> & {}>;
    remove(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
        section_id: number;
    }, unknown, never> & {}>;
}
