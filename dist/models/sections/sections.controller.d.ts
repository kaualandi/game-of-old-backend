import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { SectionsService } from './sections.service';
export declare class SectionsController {
    private readonly sectionsService;
    constructor(sectionsService: SectionsService);
    create(createSectionDto: CreateSectionDto): import(".prisma/client").Prisma.Prisma__SectionClient<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(name: string, page: string, page_size: string): Promise<{
        count: number;
        results: ({
            categorys: {
                id: number;
                name: string;
                created_at: Date;
                updated_at: Date;
                section_id: number;
            }[];
        } & {
            id: number;
            name: string;
            created_at: Date;
            updated_at: Date;
        })[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: string): Promise<{
        categorys: {
            id: number;
            name: string;
            created_at: Date;
            updated_at: Date;
            section_id: number;
        }[];
    } & {
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
    update(id: string, updateSectionDto: UpdateSectionDto): Promise<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
