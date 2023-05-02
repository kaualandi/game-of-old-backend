import { MeasuresService } from './measures.service';
import { CreateMeasureDto } from './dto/create-measure.dto';
import { UpdateMeasureDto } from './dto/update-measure.dto';
export declare class MeasuresController {
    private readonly measuresService;
    constructor(measuresService: MeasuresService);
    create(createMeasureDto: CreateMeasureDto): import(".prisma/client").Prisma.Prisma__MeasureClient<import(".prisma/client").Measure, never>;
    findAll(name: string): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Measure & {
        _count: import(".prisma/client").Prisma.MeasureCountOutputType;
    })[]>;
    findOne(id: string): Promise<import(".prisma/client").Measure & {
        _count: {
            products: number;
        };
    }>;
    update(id: string, updateMeasureDto: UpdateMeasureDto): Promise<import(".prisma/client").Measure>;
    remove(id: string): Promise<import(".prisma/client").Measure>;
}
