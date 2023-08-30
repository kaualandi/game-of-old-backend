import { CorreiosService } from './correios.service';
import { PriceDeadlineCorreioDto } from './dto/price-deadline-correio.dto';
export declare class CorreiosController {
    private readonly correiosService;
    constructor(correiosService: CorreiosService);
    priceDeadLine(priceDeadlineCorreioDto: PriceDeadlineCorreioDto): Promise<{
        sedex: {
            error: string;
            price: number;
            deadline: string;
        };
        pac: {
            error: string;
            price: number;
            deadline: string;
        };
    }>;
}
