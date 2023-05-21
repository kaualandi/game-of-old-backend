import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<import(".prisma/client").Product>;
    findAll(name: string): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Product & {
        _count: import(".prisma/client").Prisma.ProductCountOutputType;
        images: import(".prisma/client").Image[];
        category: import(".prisma/client").Category;
        measure: import(".prisma/client").Measure;
        variations: import(".prisma/client").Variation[];
        types: import(".prisma/client").Type[];
    })[]>;
    findOne(id: string): Promise<import(".prisma/client").Product & {
        images: import(".prisma/client").Image[];
        category: import(".prisma/client").Category;
        measure: import(".prisma/client").Measure;
        variations: import(".prisma/client").Variation[];
        types: import(".prisma/client").Type[];
    }>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import(".prisma/client").Product>;
    remove(id: string): Promise<import(".prisma/client").Product>;
}
