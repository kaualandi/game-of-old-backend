import { CreateVariationsDto } from './dto/create-variations.dto';
import { UpdateVariationsDto } from './dto/update-variations.dto';
import { VariationsService } from './variations.service';
export declare class VariationsController {
    private readonly variationService;
    constructor(variationService: VariationsService);
    create(createVariationDto: CreateVariationsDto): Promise<import(".prisma/client").Variation>;
    findAll(name: string): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Variation & {
        product: import(".prisma/client").Product;
    })[]>;
    findOne(id: string): Promise<import(".prisma/client").Variation>;
    update(id: string, updateVariationDto: UpdateVariationsDto): Promise<import(".prisma/client").Variation>;
    remove(id: string): Promise<import(".prisma/client").Variation>;
}
