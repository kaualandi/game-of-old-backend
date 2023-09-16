import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from 'src/modules/prisma';
export declare class AddressService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createAddressDto: CreateAddressDto, user_id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown, never> & {}>;
    findOne(id: number, user_id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown, never> & {}>;
    update(id: number, updateAddressDto: UpdateAddressDto, user_id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown, never> & {}>;
    remove(id: number, user_id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    }, unknown, never> & {}>;
}
