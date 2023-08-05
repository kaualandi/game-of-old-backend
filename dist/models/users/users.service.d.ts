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
            email: string;
            name: string;
            phone: string;
            cpf: string;
            birth_date: Date;
            is_admin: boolean;
            id: number;
            profile_url: string;
            created_at: Date;
            updated_at: Date;
        }[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: number): Promise<{
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
        email: string;
        name: string;
        phone: string;
        cpf: string;
        birth_date: Date;
        is_admin: boolean;
        id: number;
        profile_url: string;
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
