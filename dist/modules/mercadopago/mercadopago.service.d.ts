import { HttpService } from '@nestjs/axios';
import { OnModuleInit } from '@nestjs/common';
import { MercadoPagoOrder } from './mercadopago-create.dto';
export declare class MercadopagoService implements OnModuleInit {
    private readonly http;
    constructor(http: HttpService);
    private _mercadopago;
    onModuleInit(): Promise<void>;
    get mercadopago(): any;
    createPayment(order: MercadoPagoOrder): Promise<any>;
    private getDescription;
}
