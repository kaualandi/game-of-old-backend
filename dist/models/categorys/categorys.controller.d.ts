import { CategorysService } from './categorys.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategorysController {
    private readonly categorysService;
    constructor(categorysService: CategorysService);
    allowedKeys: string[];
    create(createCategoryDto: CreateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category, never>;
    findAll(name: string): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Category & {
        _count: import(".prisma/client").Prisma.CategoryCountOutputType;
    })[]>;
    findOne(id: string): Promise<import(".prisma/client").Category & {
        _count: {
            products: number;
        };
        products: import(".prisma/client").Product[];
    }>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import(".prisma/client").Category>;
    remove(id: string): Promise<import(".prisma/client").Category>;
}
