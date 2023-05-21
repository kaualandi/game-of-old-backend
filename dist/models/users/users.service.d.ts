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
    create(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    findAll(name: string): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        email: string;
        is_admin: boolean;
        id: number;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        email: string;
        is_admin: boolean;
        id: number;
        created_at: Date;
        updated_at: Date;
    }>;
    findOneByEmail(email: string): Promise<import(".prisma/client").User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").User>;
    remove(id: number): Promise<import(".prisma/client").User>;
    findOneWithPassword(id: number): Promise<import(".prisma/client").User>;
}
