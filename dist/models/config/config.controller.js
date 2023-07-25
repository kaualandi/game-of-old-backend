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
exports.ConfigController = void 0;
const common_1 = require("@nestjs/common");
const admin_guard_1 = require("../../common/guards/admin.guard");
const remove_extra_keys_pipe_1 = require("../../common/pipes/models/remove-extra-keys/remove-extra-keys.pipe");
const config_service_1 = require("./config.service");
const update_config_dto_1 = require("./dto/update-config.dto");
let ConfigController = class ConfigController {
    constructor(configService) {
        this.configService = configService;
    }
    findOne() {
        return this.configService.findOne(1);
    }
    update(updateConfigDto) {
        return this.configService.update(updateConfigDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfigController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.UsePipes)(new remove_extra_keys_pipe_1.RemoveExtraKeysPipe([
        'instagram',
        'facebook',
        'twitter',
        'whatsapp',
        'tiktok',
        'email',
        'phone',
        'cnpj',
        'customization_fee',
        'delivery_fee',
        'free_shipping',
        'installment_limit',
    ])),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_config_dto_1.UpdateConfigDto]),
    __metadata("design:returntype", void 0)
], ConfigController.prototype, "update", null);
ConfigController = __decorate([
    (0, common_1.Controller)('config'),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], ConfigController);
exports.ConfigController = ConfigController;
//# sourceMappingURL=config.controller.js.map