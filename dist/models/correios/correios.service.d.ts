import { HttpService } from '@nestjs/axios';
import { PrismaService } from './../../modules/prisma/prisma.service';
import { PriceDeadlineCorreioDto } from './dto/price-deadline-correio.dto';
import { TrackingByCodeDto } from './dto/tracking-by-code.dto';
export declare class CorreiosService {
    private readonly http;
    private prismaService;
    constructor(http: HttpService, prismaService: PrismaService);
    private readonly sCepOrigem;
    private readonly nVlPeso;
    priceDeadLine(priceDeadlineCorreioDto: PriceDeadlineCorreioDto): Promise<{
        sedex: {
            error: number;
            price: number;
            deadline: string;
        };
        pac: {
            error: number;
            price: number;
            deadline: string;
        };
    }>;
    trackingByCode(trackingByCodeDto: TrackingByCodeDto): Promise<any>;
    private xmlToJson;
}
