import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/modules/prisma';
import { S3Service } from 'src/modules/aws/s3/s3.service';
export declare class UsersService {
    private readonly prismaService;
    private s3Service;
    constructor(prismaService: PrismaService, s3Service: S3Service);
    selectUser: {
        id: boolean;
        name: boolean;
        email: boolean;
        phone: boolean;
        profile_url: boolean;
        cpf: boolean;
        birth_date: boolean;
        is_admin: boolean;
        created_at: boolean;
        updated_at: boolean;
        address: boolean;
        cart: {
            select: {
                id: boolean;
                cart_items: boolean;
            };
        };
    };
    create(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        email: string;
        name: string;
        profile_url: string;
        phone: string;
        cpf: string;
        password: string;
        google_id: string;
        birth_date: Date;
        is_admin: boolean;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(name: string, page: number, page_size: number): Promise<{
        count: number;
        results: {
            id: number;
            name: string;
            email: string;
            phone: string;
            profile_url: string;
            cpf: string;
            birth_date: Date;
            is_admin: boolean;
            created_at: Date;
            updated_at: Date;
            address: (import("@prisma/client/runtime/library").GetResult<{
                id: number;
                user_id: number;
                zip_code: string;
                state: string;
                city: string;
                neighborhood: string;
                street: string;
                number: string;
                complement: string;
                created_at: Date;
                updated_at: Date;
            }, unknown, never> & {})[];
            cart: {
                id: number;
                cart_items: (import("@prisma/client/runtime/library").GetResult<{
                    id: number;
                    cart_id: number;
                    product_variant_id: number;
                    quantity: number;
                    customization: boolean;
                    customization_name: string;
                    customization_number: number;
                    created_at: Date;
                    updated_at: Date;
                }, unknown, never> & {})[];
            };
        }[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        phone: string;
        profile_url: string;
        cpf: string;
        birth_date: Date;
        is_admin: boolean;
        created_at: Date;
        updated_at: Date;
        address: (import("@prisma/client/runtime/library").GetResult<{
            id: number;
            user_id: number;
            zip_code: string;
            state: string;
            city: string;
            neighborhood: string;
            street: string;
            number: string;
            complement: string;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {})[];
        cart: {
            id: number;
            cart_items: (import("@prisma/client/runtime/library").GetResult<{
                id: number;
                cart_id: number;
                product_variant_id: number;
                quantity: number;
                customization: boolean;
                customization_name: string;
                customization_number: number;
                created_at: Date;
                updated_at: Date;
            }, unknown, never> & {})[];
        };
    }>;
    findOneByEmail(email: string): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        email: string;
        name: string;
        profile_url: string;
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
        profile_url: string;
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
        profile_url: string;
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
        profile_url: string;
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
