import { PrismaService } from 'src/modules/prisma';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
export declare class TypesService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createTypeDto: CreateTypeDto): import(".prisma/client").Prisma.Prisma__TypeClient<import(".prisma/client").Type, never>;
    findAll(name: string): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Type & {
        product: import(".prisma/client").Product;
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").Type>;
    update(id: number, updateTypeDto: UpdateTypeDto): Promise<import(".prisma/client").Type>;
    remove(id: number): Promise<import(".prisma/client").Type>;
}
