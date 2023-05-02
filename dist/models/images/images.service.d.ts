import { S3Service } from './../../modules/aws/s3/s3.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { PrismaService } from 'src/modules/prisma';
export declare class ImagesService {
    private readonly prismaService;
    private readonly s3Service;
    constructor(prismaService: PrismaService, s3Service: S3Service);
    create(createImageDto: CreateImageDto): Promise<import(".prisma/client").Image>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Image[]>;
    findOne(id: number): Promise<import(".prisma/client").Image & {
        product: import(".prisma/client").Product;
    }>;
    update(id: number, updateImageDto: UpdateImageDto): Promise<import(".prisma/client").Image>;
    remove(id: number): Promise<import(".prisma/client").Image>;
}
