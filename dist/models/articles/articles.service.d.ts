import { S3Service } from './../../modules/aws/s3/s3.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { PrismaService } from 'src/modules/prisma';
export declare class ArticlesService {
    private readonly s3Service;
    private readonly prismaService;
    constructor(s3Service: S3Service, prismaService: PrismaService);
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
    findOne(id: number): Promise<{
        id: number;
        image: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        image: string;
        created_at: Date;
        updated_at: Date;
        config_id: number;
    }>;
}
