import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { PrismaService } from 'src/modules/prisma';
export declare class TagsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createTagDto: CreateTagDto): import(".prisma/client").Prisma.Prisma__TagClient<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        icon: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }, unknown, never> & {}, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(name: string, page: number, page_size: number): Promise<{
        count: number;
        results: (import("@prisma/client/runtime/library").GetResult<{
            id: number;
            name: string;
            icon: string;
            created_at: Date;
            updated_at: Date;
            config_id: number;
        }, unknown, never> & {})[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        icon: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }, unknown, never> & {}>;
    update(id: number, updateTagDto: UpdateTagDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        icon: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }, unknown, never> & {}>;
    remove(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        icon: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }, unknown, never> & {}>;
}
