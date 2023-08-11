import { PrismaService } from 'src/modules/prisma';
export declare class HomeService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    config(): Promise<{
        _count: {
            tags: number;
            banners: number;
            articles: number;
        };
        tags: {
            id: number;
            name: string;
            icon: string;
            created_at: Date;
            updated_at: Date;
            config_id: number;
        }[];
        banners: {
            id: number;
            image: string;
            created_at: Date;
            updated_at: Date;
            config_id: number;
        }[];
        articles: {
            id: number;
            image: string;
            created_at: Date;
            updated_at: Date;
            config_id: number;
        }[];
    } & {
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
    }>;
    teamsSellers(): Promise<{
        teams: {
            id: number;
            name: string;
            url: string;
            created_at: Date;
            updated_at: Date;
        }[];
        products: ({
            team: {
                id: number;
                name: string;
                url: string;
                created_at: Date;
                updated_at: Date;
            };
            images: {
                id: number;
                product_id: number;
                url: string;
                created_at: Date;
                updated_at: Date;
            }[];
        } & {
            id: number;
            name: string;
            description: string;
            base_price: number;
            trending: boolean;
            discount: number;
            team_id: number;
            sold: number;
            is_active: boolean;
            created_at: Date;
            updated_at: Date;
        })[];
    }>;
    releases(): Promise<({
        team: {
            id: number;
            name: string;
            url: string;
            created_at: Date;
            updated_at: Date;
        };
        images: {
            id: number;
            product_id: number;
            url: string;
            created_at: Date;
            updated_at: Date;
        }[];
    } & {
        id: number;
        name: string;
        description: string;
        base_price: number;
        trending: boolean;
        discount: number;
        team_id: number;
        sold: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    })[]>;
}
