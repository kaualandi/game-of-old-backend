"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasuresModule = void 0;
const common_1 = require("@nestjs/common");
const measures_service_1 = require("./measures.service");
const measures_controller_1 = require("./measures.controller");
const prisma_1 = require("../../modules/prisma");
let MeasuresModule = class MeasuresModule {
};
MeasuresModule = __decorate([
    (0, common_1.Module)({
        controllers: [measures_controller_1.MeasuresController],
        imports: [prisma_1.PrismaModule],
        providers: [measures_service_1.MeasuresService],
    })
], MeasuresModule);
exports.MeasuresModule = MeasuresModule;
//# sourceMappingURL=measures.module.js.map