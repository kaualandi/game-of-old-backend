import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { PrismaService } from 'src/modules/prisma';
export declare class SectionsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createSectionDto: CreateSectionDto): void;
    findAll(name: string, page: number, page_size: number): Promise<{
        count: number;
        results: ({
            categorys: (import("@prisma/client/runtime/library").GetResult<{
                id: number;
                name: string;
                created_at: Date;
                updated_at: Date;
                section_id: number;
            }, unknown, never> & {})[];
        } & import("@prisma/client/runtime/library").GetResult<{
            id: number;
            name: string;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {})[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: number): Promise<{
        categorys: (import("@prisma/client/runtime/library").GetResult<{
            id: number;
            name: string;
            created_at: Date;
            updated_at: Date;
            section_id: number;
        }, unknown, never> & {})[];
    } & import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    update(id: number, updateSectionDto: UpdateSectionDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    remove(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
}
