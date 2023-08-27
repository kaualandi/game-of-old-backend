import { UpdateConfigDto } from './dto/update-config.dto';
import { PrismaService } from 'src/modules/prisma';
export declare class ConfigService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ConfigClient<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        instagram: string;
        facebook: string;
        twitter: string;
        whatsapp: string;
        tiktok: string;
        email: string;
        phone: string;
        cnpj: string;
        customization_fee: number;
        delivery_fee: number;
        free_shipping: boolean;
        installment_limit: number;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(updateConfigDto: UpdateConfigDto): import(".prisma/client").Prisma.Prisma__ConfigClient<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        instagram: string;
        facebook: string;
        twitter: string;
        whatsapp: string;
        tiktok: string;
        email: string;
        phone: string;
        cnpj: string;
        customization_fee: number;
        delivery_fee: number;
        free_shipping: boolean;
        installment_limit: number;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
