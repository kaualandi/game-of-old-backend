import { PrismaService } from './../../modules/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategorysService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createCategoryDto: CreateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category, never>;
    findAll(name: string): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Category & {
        _count: import(".prisma/client").Prisma.CategoryCountOutputType;
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").Category & {
        _count: {
            products: number;
        };
        products: import(".prisma/client").Product[];
    }>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<import(".prisma/client").Category>;
    remove(id: number): Promise<import(".prisma/client").Category>;
}
