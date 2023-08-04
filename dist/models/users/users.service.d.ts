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
        address: boolean;
        cart: {
            select: {
                id: boolean;
                cart_items: boolean;
            };
        };
    };
    create(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(name: string, page: number, page_size: number): Promise<{
        count: number;
        results: {
            email: string;
            address: {
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
            }[];
            name: string;
            is_admin: boolean;
            cart: {
                id: number;
                cart_items: {
                    id: number;
                    cart_id: number;
                    product_variant_id: number;
                    quantity: number;
                    customization: boolean;
                    customization_name: string;
                    customization_number: number;
                    created_at: Date;
                    updated_at: Date;
                }[];
            };
            id: number;
            created_at: Date;
            updated_at: Date;
        }[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: number): Promise<{
        email: string;
        address: {
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
        }[];
        name: string;
        is_admin: boolean;
        cart: {
            id: number;
            cart_items: {
                id: number;
                cart_id: number;
                product_variant_id: number;
                quantity: number;
                customization: boolean;
                customization_name: string;
                customization_number: number;
                created_at: Date;
                updated_at: Date;
            }[];
        };
        id: number;
        created_at: Date;
        updated_at: Date;
    }>;
    findOneByEmail(email: string): Promise<{
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
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
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
    }>;
    remove(id: number): Promise<{
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
    }>;
    findOneWithPassword(id: number): Promise<{
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
    }>;
}
