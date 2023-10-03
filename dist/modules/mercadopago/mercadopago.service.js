"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadopagoService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const mercadopagoSdk = require('mercadopago');
let MercadopagoService = class MercadopagoService {
    constructor(http) {
        this.http = http;
        this._mercadopago = mercadopagoSdk;
    }
    async onModuleInit() {
        this._mercadopago.configure({
            access_token: process.env.MP_ACCESS_TOKEN,
        });
    }
    get mercadopago() {
        return this._mercadopago;
    }
    async createPayment(order) {
        const token = await this.mercadopago.card_token.create({
            cardNumber: '4235647728025682',
            securityCode: '123',
            expirationMonth: '11',
            expirationYear: '2025',
            cardholder: {
                name: 'APRO',
                identification: {
                    type: 'CPF',
                    number: '12345678909',
                },
            },
        });
        console.log('token', token);
        return this.mercadopago.payment
            .save({
            token: token.body.id,
            installments: order.installments || 1,
            payer: {
                email: order.user.email,
                first_name: order.user.name.split(' ')[0],
                last_name: order.user.name.split(' ')[1] || '',
            },
            payment_method_id: 'visa',
            transaction_amount: order.total,
        })
            .then((payment) => {
            console.log('save', payment);
            return this.mercadopago.payment
                .capture(payment.body.id)
                .then((payment) => {
                console.log('capture', payment);
                return payment;
            });
        })
            .catch((error) => {
            console.log(error);
        });
    }
    getDescription(item) {
        if (item.customization) {
            return `${item.customization_name} | ${item.customization_number} - ${item.product_variant.product.description}`;
        }
        return item.product_variant.product.description;
    }
};
MercadopagoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], MercadopagoService);
exports.MercadopagoService = MercadopagoService;
//# sourceMappingURL=mercadopago.service.js.map