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
exports.HomeController = void 0;
const common_1 = require("@nestjs/common");
const home_service_1 = require("./home.service");
let HomeController = class HomeController {
    constructor(homeService) {
        this.homeService = homeService;
    }
    async config() {
        return await this.homeService.config();
    }
    async teamsSellers() {
        return await this.homeService.teamsSellers();
    }
    async releases() {
        return await this.homeService.releases();
    }
};
__decorate([
    (0, common_1.Get)('config'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "config", null);
__decorate([
    (0, common_1.Get)('teams-sellers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "teamsSellers", null);
__decorate([
    (0, common_1.Get)('releases'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "releases", null);
HomeController = __decorate([
    (0, common_1.Controller)('home'),
    __metadata("design:paramtypes", [home_service_1.HomeService])
], HomeController);
exports.HomeController = HomeController;
//# sourceMappingURL=home.controller.js.map