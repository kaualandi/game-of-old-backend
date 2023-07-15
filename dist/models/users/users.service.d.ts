import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/modules/prisma';
export declare class UsersService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    selectUser: {
        id: boolean;
        name: boolean;
        email: boolean;
        is_admin: boolean;
        created_at: boolean;
        updated_at: boolean;
    };
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
    findOne(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        is_admin: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    findOneByEmail(email: string): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    remove(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    findOneWithPassword(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
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
