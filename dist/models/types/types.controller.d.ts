import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
export declare class TypesController {
    private readonly typesService;
    constructor(typesService: TypesService);
    create(createTypeDto: CreateTypeDto): import(".prisma/client").Prisma.Prisma__TypeClient<import(".prisma/client").Type, never>;
    findAll(name: string): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Type & {
        product: import(".prisma/client").Product;
    })[]>;
    findOne(id: string): Promise<import(".prisma/client").Type>;
    update(id: string, updateTypeDto: UpdateTypeDto): Promise<import(".prisma/client").Type>;
    remove(id: string): Promise<import(".prisma/client").Type>;
}
