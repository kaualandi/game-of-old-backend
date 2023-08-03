import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { SectionsService } from './sections.service';
export declare class SectionsController {
    private readonly sectionsService;
    constructor(sectionsService: SectionsService);
    create(createSectionDto: CreateSectionDto): void;
    findAll(name: string, page: string, page_size: string): Promise<{
        count: number;
        results: ({
            category: import("@prisma/client/runtime/library").GetResult<{
                id: number;
                name: string;
                created_at: Date;
                updated_at: Date;
                section_id: number;
            }, unknown, never> & {};
        } & import("@prisma/client/runtime/library").GetResult<{
            id: number;
            name: string;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {})[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: string): Promise<{
        category: import("@prisma/client/runtime/library").GetResult<{
            id: number;
            name: string;
            created_at: Date;
            updated_at: Date;
            section_id: number;
        }, unknown, never> & {};
    } & import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    update(id: string, updateSectionDto: UpdateSectionDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
}
