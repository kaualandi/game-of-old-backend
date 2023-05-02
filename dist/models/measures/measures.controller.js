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
exports.MeasuresController = void 0;
const common_1 = require("@nestjs/common");
const measures_service_1 = require("./measures.service");
const create_measure_dto_1 = require("./dto/create-measure.dto");
const update_measure_dto_1 = require("./dto/update-measure.dto");
const remove_extra_keys_pipe_1 = require("../../common/pipes/models/remove-extra-keys/remove-extra-keys.pipe");
const admin_guard_1 = require("../../common/guards/admin.guard");
let MeasuresController = class MeasuresController {
    constructor(measuresService) {
        this.measuresService = measuresService;
    }
    create(createMeasureDto) {
        return this.measuresService.create(createMeasureDto);
    }
    findAll(name) {
        return this.measuresService.findAll(name || '');
    }
    findOne(id) {
        return this.measuresService.findOne(+id);
    }
    update(id, updateMeasureDto) {
        return this.measuresService.update(+id, updateMeasureDto);
    }
    remove(id) {
        return this.measuresService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.UsePipes)(new remove_extra_keys_pipe_1.RemoveExtraKeysPipe(['name', 'abbreviation'])),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_measure_dto_1.CreateMeasureDto]),
    __metadata("design:returntype", void 0)
], MeasuresController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MeasuresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MeasuresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.UsePipes)(new remove_extra_keys_pipe_1.RemoveExtraKeysPipe(['name', 'abbreviation'])),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_measure_dto_1.UpdateMeasureDto]),
    __metadata("design:returntype", void 0)
], MeasuresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MeasuresController.prototype, "remove", null);
MeasuresController = __decorate([
    (0, common_1.Controller)('measures'),
    __metadata("design:paramtypes", [measures_service_1.MeasuresService])
], MeasuresController);
exports.MeasuresController = MeasuresController;
//# sourceMappingURL=measures.controller.js.map