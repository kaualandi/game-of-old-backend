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
    findAll(name: string, page: string, page_size: string): Promise<{
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
    findOne(id: string): Promise<{
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
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
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
