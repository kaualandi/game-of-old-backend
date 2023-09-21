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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorreiosController = void 0;
const common_1 = require("@nestjs/common");
const correios_service_1 = require("./correios.service");
const price_deadline_correio_dto_1 = require("./dto/price-deadline-correio.dto");
const tracking_by_code_dto_1 = require("./dto/tracking-by-code.dto");
let CorreiosController = class CorreiosController {
    constructor(correiosService) {
        this.correiosService = correiosService;
    }
    async priceDeadLine(priceDeadlineCorreioDto) {
        return await this.correiosService.priceDeadLine(priceDeadlineCorreioDto);
    }
    async trackingByCode(trackingByCodeDto) {
        return await this.correiosService.trackingByCode(trackingByCodeDto);
    }
};
__decorate([
    (0, common_1.Get)('price-deadline'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [price_deadline_correio_dto_1.PriceDeadlineCorreioDto]),
    __metadata("design:returntype", Promise)
], CorreiosController.prototype, "priceDeadLine", null);
__decorate([
    (0, common_1.Get)('tracking/by-code'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tracking_by_code_dto_1.TrackingByCodeDto]),
    __metadata("design:returntype", Promise)
], CorreiosController.prototype, "trackingByCode", null);
CorreiosController = __decorate([
    (0, common_1.Controller)('correios'),
    __metadata("design:paramtypes", [correios_service_1.CorreiosService])
], CorreiosController);
exports.CorreiosController = CorreiosController;
//# sourceMappingURL=correios.controller.js.map