import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
export declare class ImagesController {
    private readonly imagesService;
    constructor(imagesService: ImagesService);
    create(createImageDto: CreateImageDto): Promise<any>;
    findAll(): any;
    findOne(id: string): Promise<any>;
    update(id: string, updateImageDto: UpdateImageDto): Promise<any>;
    remove(id: string): Promise<any>;
}
