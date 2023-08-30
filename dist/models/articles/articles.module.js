"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesModule = void 0;
const common_1 = require("@nestjs/common");
const articles_service_1 = require("./articles.service");
const articles_controller_1 = require("./articles.controller");
const s3_module_1 = require("../../modules/aws/s3/s3.module");
const prisma_1 = require("../../modules/prisma");
const s3_service_1 = require("../../modules/aws/s3/s3.service");
let ArticlesModule = class ArticlesModule {
};
ArticlesModule = __decorate([
    (0, common_1.Module)({
        controllers: [articles_controller_1.ArticlesController],
        imports: [s3_module_1.S3Module, prisma_1.PrismaModule],
        providers: [articles_service_1.ArticlesService, s3_service_1.S3Service],
    })
], ArticlesModule);
exports.ArticlesModule = ArticlesModule;
//# sourceMappingURL=articles.module.js.map