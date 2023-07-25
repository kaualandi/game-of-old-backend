import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { TagsService } from './tags.service';
export declare class TagsController {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    create(createTagDto: CreateTagDto): import(".prisma/client").Prisma.Prisma__TagClient<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        icon: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }, unknown, never> & {}, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(name: string, page: string, page_size: string): Promise<{
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
    findOne(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        icon: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }, unknown, never> & {}>;
    update(id: string, updateTagDto: UpdateTagDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        icon: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }, unknown, never> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        icon: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }, unknown, never> & {}>;
}
