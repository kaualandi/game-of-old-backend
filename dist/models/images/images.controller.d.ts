import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
export declare class ImagesController {
    private readonly imagesService;
    constructor(imagesService: ImagesService);
    create(createImageDto: CreateImageDto): Promise<import(".prisma/client").Image>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Image[]>;
    findOne(id: string): Promise<import(".prisma/client").Image & {
        product: import(".prisma/client").Product;
    }>;
    update(id: string, updateImageDto: UpdateImageDto): Promise<import(".prisma/client").Image>;
    remove(id: string): Promise<import(".prisma/client").Image>;
}
