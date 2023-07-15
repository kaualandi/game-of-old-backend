import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        email: string;
        name: string;
        phone: string;
        cpf: string;
        password: string;
        google_id: string;
        birth_date: Date;
        is_admin: boolean;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(name: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        email: string;
        is_admin: boolean;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
        email: string;
        is_admin: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        email: string;
        name: string;
        phone: string;
        cpf: string;
        password: string;
        google_id: string;
        birth_date: Date;
        is_admin: boolean;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        email: string;
        name: string;
        phone: string;
        cpf: string;
        password: string;
        google_id: string;
        birth_date: Date;
        is_admin: boolean;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
}
