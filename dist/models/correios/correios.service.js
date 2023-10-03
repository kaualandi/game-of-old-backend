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
exports.CorreiosService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const xml_js_1 = require("xml-js");
const prisma_service_1 = require("./../../modules/prisma/prisma.service");
let CorreiosService = class CorreiosService {
    constructor(http, prismaService) {
        this.http = http;
        this.prismaService = prismaService;
        this.sCepOrigem = '25953001';
        this.nVlPeso = 0.1;
    }
    async priceDeadLine(priceDeadlineCorreioDto) {
        const params = {
            nCdEmpresa: '',
            sDsSenha: '',
            sCepOrigem: this.sCepOrigem,
            sCepDestino: priceDeadlineCorreioDto.destination_zip_code,
            nVlPeso: this.nVlPeso * priceDeadlineCorreioDto.products_quantity,
            nCdFormato: 3,
            nVlComprimento: 40,
            nVlAltura: 0,
            nVlLargura: 30,
            sCdMaoPropria: 'n',
            nVlValorDeclarado: priceDeadlineCorreioDto.price,
            sCdAvisoRecebimento: 's',
            nCdServico: '',
            StrRetorno: 'xml',
            nIndicaCalculo: 3,
        };
        const responseSedex = await (0, rxjs_1.lastValueFrom)(this.http.get('http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx', { params: Object.assign(Object.assign({}, params), { nCdServico: '04014' }) }));
        const responsePac = await (0, rxjs_1.lastValueFrom)(this.http.get('http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx', { params: Object.assign(Object.assign({}, params), { nCdServico: '04510' }) }));
        const sedexResponseXml = responseSedex.data;
        const pacResponseXml = responsePac.data;
        const sedex = this.xmlToJson(sedexResponseXml).Servicos.cServico;
        const pac = this.xmlToJson(pacResponseXml).Servicos.cServico;
        return {
            sedex: {
                error: parseFloat(sedex.Erro._text),
                price: parseFloat(sedex.Valor._text.replace(',', '.')),
                deadline: sedex.PrazoEntrega._text,
            },
            pac: {
                error: parseFloat(pac.Erro._text),
                price: parseFloat(pac.Valor._text.replace(',', '.')),
                deadline: pac.PrazoEntrega._text,
            },
        };
    }
    async trackingByCode(trackingByCodeDto) {
        const order = await this.prismaService.order.findFirst({
            where: {
                tracking_number: trackingByCodeDto.code,
            },
        });
        if (!order) {
            throw new common_1.BadRequestException('Não foi possível encontrar o pedido com esse código.');
        }
    }
    xmlToJson(xml) {
        const options = { compact: true, ignoreComment: true, spaces: 4 };
        return (0, xml_js_1.xml2js)(xml, options);
    }
};
CorreiosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        prisma_service_1.PrismaService])
], CorreiosService);
exports.CorreiosService = CorreiosService;
//# sourceMappingURL=correios.service.js.map