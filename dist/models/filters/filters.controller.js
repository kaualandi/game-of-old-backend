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
exports.FiltersController = void 0;
const common_1 = require("@nestjs/common");
const admin_guard_1 = require("../../common/guards/admin.guard");
const remove_extra_keys_pipe_1 = require("../../common/pipes/models/remove-extra-keys/remove-extra-keys.pipe");
const create_filter_dto_1 = require("./dto/create-filter.dto");
const update_filter_dto_1 = require("./dto/update-filter.dto");
const filters_service_1 = require("./filters.service");
let FiltersController = class FiltersController {
    constructor(filtersService) {
        this.filtersService = filtersService;
    }
    create(createFilterDto) {
        return this.filtersService.create(createFilterDto);
    }
    async findAll(name, page, page_size) {
        return await this.filtersService.findAll(name, +page, +page_size);
    }
    async findOne(id) {
        return await this.filtersService.findOne(+id);
    }
    async update(id, updateFilterDto) {
        return await this.filtersService.update(+id, updateFilterDto);
    }
    async remove(id) {
        return await this.filtersService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.UsePipes)(new remove_extra_keys_pipe_1.RemoveExtraKeysPipe(['name', 'category_id'])),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_filter_dto_1.CreateFilterDto]),
    __metadata("design:returntype", void 0)
], FiltersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('name')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('page_size')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], FiltersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FiltersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.UsePipes)(new remove_extra_keys_pipe_1.RemoveExtraKeysPipe(['name', 'category_id'])),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_filter_dto_1.UpdateFilterDto]),
    __metadata("design:returntype", Promise)
], FiltersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FiltersController.prototype, "remove", null);
FiltersController = __decorate([
    (0, common_1.Controller)('filters'),
    __metadata("design:paramtypes", [filters_service_1.FiltersService])
], FiltersController);
exports.FiltersController = FiltersController;
//# sourceMappingURL=filters.controller.js.map