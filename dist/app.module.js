"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./models/auth/auth.module");
const categorys_module_1 = require("./models/categorys/categorys.module");
const images_module_1 = require("./models/images/images.module");
const measures_module_1 = require("./models/measures/measures.module");
const orders_module_1 = require("./models/orders/orders.module");
const products_module_1 = require("./models/products/products.module");
const types_module_1 = require("./models/types/types.module");
const users_module_1 = require("./models/users/users.module");
const variations_module_1 = require("./models/variations/variations.module");
const s3_module_1 = require("./modules/aws/s3/s3.module");
const prisma_module_1 = require("./modules/prisma/prisma.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        controllers: [app_controller_1.AppController],
        imports: [
            prisma_module_1.PrismaModule,
            variations_module_1.VariationsModule,
            s3_module_1.S3Module,
            types_module_1.TypesModule,
            images_module_1.ImagesModule,
            measures_module_1.MeasuresModule,
            categorys_module_1.CategorysModule,
            products_module_1.ProductsModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            orders_module_1.OrdersModule,
        ],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map