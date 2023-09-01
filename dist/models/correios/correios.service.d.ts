import { PriceDeadlineCorreioDto } from './dto/price-deadline-correio.dto';
import { HttpService } from '@nestjs/axios';
export declare class CorreiosService {
    private readonly http;
    constructor(http: HttpService);
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
    private xmlToJson;
}