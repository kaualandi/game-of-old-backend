import { PrismaService } from './../../modules/prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
export declare class ContactService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createContactDto: CreateContactDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        phone: string;
        contact_back: import(".prisma/client").ContactBack;
        subject: string;
        message: string;
        opened: boolean;
        read: boolean;
        conclusion: string;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    findAll(name: string, page: number, page_size: number): Promise<{
        count: number;
        results: (import("@prisma/client/runtime/library").GetResult<{
            id: number;
            name: string;
            email: string;
            phone: string;
            contact_back: import(".prisma/client").ContactBack;
            subject: string;
            message: string;
            opened: boolean;
            read: boolean;
            conclusion: string;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {})[];
        next: boolean;
        previous: boolean;
    }>;
    findOne(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        phone: string;
        contact_back: import(".prisma/client").ContactBack;
        subject: string;
        message: string;
        opened: boolean;
        read: boolean;
        conclusion: string;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    update(id: number, updateContactDto: UpdateContactDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        phone: string;
        contact_back: import(".prisma/client").ContactBack;
        subject: string;
        message: string;
        opened: boolean;
        read: boolean;
        conclusion: string;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    remove(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        phone: string;
        contact_back: import(".prisma/client").ContactBack;
        subject: string;
        message: string;
        opened: boolean;
        read: boolean;
        conclusion: string;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
}
