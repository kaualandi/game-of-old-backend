import { ImagesService } from './../images/images.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/modules/prisma';
import { TypesService } from '../types/types.service';
import { VariationsService } from '../variations/variations.service';
export declare class ProductsService {
    private readonly prismaService;
    private readonly imagesService;
    private readonly typesService;
    private readonly variationsService;
    constructor(prismaService: PrismaService, imagesService: ImagesService, typesService: TypesService, variationsService: VariationsService);
    create(createProductDto: CreateProductDto): Promise<import(".prisma/client").Product>;
    findAll(name: string): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Product & {
        variations: import(".prisma/client").Variation[];
        types: import(".prisma/client").Type[];
        images: import(".prisma/client").Image[];
        _count: import(".prisma/client").Prisma.ProductCountOutputType;
        category: import(".prisma/client").Category;
        measure: import(".prisma/client").Measure;
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").Product & {
        variations: import(".prisma/client").Variation[];
        types: import(".prisma/client").Type[];
        images: import(".prisma/client").Image[];
        category: import(".prisma/client").Category;
        measure: import(".prisma/client").Measure;
    }>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<import(".prisma/client").Product>;
    remove(id: number): Promise<import(".prisma/client").Product>;
}
