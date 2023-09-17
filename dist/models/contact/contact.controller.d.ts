import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
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
    findAll(name: string, page: string, page_size: string): Promise<{
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
    findOne(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    update(id: string, updateContactDto: UpdateContactDto): Promise<import("@prisma/client/runtime/library").GetResult<{
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
    remove(id: string): Promise<import("@prisma/client/runtime/library").GetResult<{
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
