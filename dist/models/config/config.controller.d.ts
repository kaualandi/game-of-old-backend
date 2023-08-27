import { ConfigService } from './config.service';
import { UpdateConfigDto } from './dto/update-config.dto';
export declare class ConfigController {
    private readonly configService;
    constructor(configService: ConfigService);
    findOne(): import(".prisma/client").Prisma.Prisma__ConfigClient<import("@prisma/client/runtime/library").GetResult<{
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
