import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { TagsService } from './tags.service';
export declare class TagsController {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    create(createTagDto: CreateTagDto): import(".prisma/client").Prisma.Prisma__TagClient<{
        id: number;
        name: string;
        icon: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(name: string, page: string, page_size: string): Promise<{
        count: number;
        results: {
            id: number;
            name: string;
            icon: string;
            created_at: Date;
            updated_at: Date;
            config_id: number;
        }[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
        icon: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }>;
    update(id: string, updateTagDto: UpdateTagDto): Promise<{
        id: number;
        name: string;
        icon: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        icon: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }>;
}
