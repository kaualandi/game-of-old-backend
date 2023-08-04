import { S3Service } from 'src/modules/aws/s3/s3.service';
import { PrismaService } from 'src/modules/prisma';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
export declare class TeamsService {
    private readonly prismaService;
    private readonly s3Service;
    constructor(prismaService: PrismaService, s3Service: S3Service);
    create(createTeamDto: CreateTeamDto): Promise<{
        id: number;
        name: string;
        url: string;
        created_at: Date;
        updated_at: Date;
    }>;
    findAll(name: string, page: number, page_size: number): Promise<{
        count: number;
        results: {
            id: number;
            name: string;
            url: string;
            created_at: Date;
            updated_at: Date;
        }[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: number): Promise<{
        products: {
            id: number;
            name: string;
            description: string;
            base_price: number;
            trending: boolean;
            discount: number;
            team_id: number;
            sold: number;
            is_active: boolean;
            created_at: Date;
            updated_at: Date;
        }[];
    } & {
        id: number;
        name: string;
        url: string;
        created_at: Date;
        updated_at: Date;
    }>;
    update(id: number, updateTeamDto: UpdateTeamDto): Promise<{
        id: number;
        name: string;
        url: string;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        url: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
