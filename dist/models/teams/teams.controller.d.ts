import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { TeamsService } from './teams.service';
export declare class TeamsController {
    private readonly teamsService;
    constructor(teamsService: TeamsService);
    create(createTeamDto: CreateTeamDto): Promise<{
        id: number;
        name: string;
        url: string;
        created_at: Date;
        updated_at: Date;
    }>;
    findAll(name: string, page: string, page_size: string): Promise<{
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
    findOne(id: string): Promise<{
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
    update(id: string, updateTeamDto: UpdateTeamDto): Promise<{
        id: number;
        name: string;
        url: string;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        url: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
