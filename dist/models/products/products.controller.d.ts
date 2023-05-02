import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<import(".prisma/client").Product>;
    findAll(name: string): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Product & {
        variations: import(".prisma/client").Variation[];
        types: import(".prisma/client").Type[];
        images: import(".prisma/client").Image[];
        _count: import(".prisma/client").Prisma.ProductCountOutputType;
        category: import(".prisma/client").Category;
        measure: import(".prisma/client").Measure;
    })[]>;
    findOne(id: string): Promise<import(".prisma/client").Product & {
        variations: import(".prisma/client").Variation[];
        types: import(".prisma/client").Type[];
        images: import(".prisma/client").Image[];
        category: import(".prisma/client").Category;
        measure: import(".prisma/client").Measure;
    }>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import(".prisma/client").Product>;
    remove(id: string): Promise<import(".prisma/client").Product>;
}
