import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    create(createAddressDto: CreateAddressDto, request: {
        user_id: string;
    }): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        user_id: number;
        zip_code: string;
        state: string;
        city: string;
        neighborhood: string;
        street: string;
        number: string;
        complement: string;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    findOne(id: string, request: {
        user_id: string;
    }): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        user_id: number;
        zip_code: string;
        state: string;
        city: string;
        neighborhood: string;
        street: string;
        number: string;
        complement: string;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    update(id: string, updateAddressDto: UpdateAddressDto, request: {
        user_id: string;
    }): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        user_id: number;
        zip_code: string;
        state: string;
        city: string;
        neighborhood: string;
        street: string;
        number: string;
        complement: string;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    remove(id: string, request: {
        user_id: string;
    }): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        user_id: number;
        zip_code: string;
        state: string;
        city: string;
        neighborhood: string;
        street: string;
        number: string;
        complement: string;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
}
