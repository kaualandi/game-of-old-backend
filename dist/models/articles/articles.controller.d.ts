import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    create(createArticleDto: CreateArticleDto): Promise<{
        id: number;
        image: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }>;
    findAll(page: number, page_size: number): Promise<{
        count: number;
        results: {
            id: number;
            image: string;
            created_at: Date;
            updated_at: Date;
            config_id: number;
        }[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: string): Promise<{
        id: number;
        image: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        image: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }>;
}
