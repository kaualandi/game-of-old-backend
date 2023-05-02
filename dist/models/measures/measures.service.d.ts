import { PrismaService } from './../../modules/prisma/prisma.service';
import { CreateMeasureDto } from './dto/create-measure.dto';
import { UpdateMeasureDto } from './dto/update-measure.dto';
export declare class MeasuresService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createMeasureDto: CreateMeasureDto): import(".prisma/client").Prisma.Prisma__MeasureClient<import(".prisma/client").Measure, never>;
    findAll(name: string): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Measure & {
        _count: import(".prisma/client").Prisma.MeasureCountOutputType;
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").Measure & {
        _count: {
            products: number;
        };
    }>;
    update(id: number, updateMeasureDto: UpdateMeasureDto): Promise<import(".prisma/client").Measure>;
    remove(id: number): Promise<import(".prisma/client").Measure>;
}
