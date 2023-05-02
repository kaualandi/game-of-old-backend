import { S3Service } from './../../modules/aws/s3/s3.service';
import { CreateVariationsDto } from './dto/create-variations.dto';
import { UpdateVariationsDto } from './dto/update-variations.dto';
import { PrismaService } from 'src/modules/prisma';
export declare class VariationsService {
    private readonly prismaService;
    private readonly s3Service;
    constructor(prismaService: PrismaService, s3Service: S3Service);
    create(createVariationsDto: CreateVariationsDto): Promise<import(".prisma/client").Variation>;
    findAll(name: string): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Variation & {
        product: import(".prisma/client").Product;
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").Variation>;
    update(id: number, updateVariationsDto: UpdateVariationsDto): Promise<import(".prisma/client").Variation>;
    remove(id: number): Promise<import(".prisma/client").Variation>;
}
