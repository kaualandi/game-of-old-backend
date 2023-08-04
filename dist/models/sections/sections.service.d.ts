import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { PrismaService } from 'src/modules/prisma';
export declare class SectionsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createSectionDto: CreateSectionDto): import(".prisma/client").Prisma.Prisma__SectionClient<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(name: string, page: number, page_size: number): Promise<{
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
    findOne(id: number): Promise<{
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
    update(id: number, updateSectionDto: UpdateSectionDto): Promise<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
