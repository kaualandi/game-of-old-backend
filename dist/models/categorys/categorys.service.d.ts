import { PrismaService } from './../../modules/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategorysService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createCategoryDto: CreateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
        section_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(name: string, page: number, page_size: number): Promise<{
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
    findOne(id: number): Promise<{
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
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
        section_id: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
        section_id: number;
    }>;
}
