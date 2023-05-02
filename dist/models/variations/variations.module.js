"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariationsModule = void 0;
const common_1 = require("@nestjs/common");
const logger_middleware_1 = require("../../common/middleware/models/logger/logger.middleware");
const s3_module_1 = require("../../modules/aws/s3/s3.module");
const prisma_1 = require("../../modules/prisma");
const variations_controller_1 = require("./variations.controller");
const variations_service_1 = require("./variations.service");
let VariationsModule = class VariationsModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes(variations_controller_1.VariationsController);
    }
};
VariationsModule = __decorate([
    (0, common_1.Module)({
        controllers: [variations_controller_1.VariationsController],
        imports: [s3_module_1.S3Module, prisma_1.PrismaModule],
        providers: [variations_service_1.VariationsService],
    })
], VariationsModule);
exports.VariationsModule = VariationsModule;
//# sourceMappingURL=variations.module.js.map