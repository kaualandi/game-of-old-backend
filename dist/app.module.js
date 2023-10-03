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
const orders_module_1 = require("./models/orders/orders.module");
const products_module_1 = require("./models/products/products.module");
const users_module_1 = require("./models/users/users.module");
const variants_module_1 = require("./models/variants/variants.module");
const s3_module_1 = require("./modules/aws/s3/s3.module");
const prisma_module_1 = require("./modules/prisma/prisma.module");
const coupons_module_1 = require("./models/coupons/coupons.module");
const cart_module_1 = require("./models/cart/cart.module");
const teams_module_1 = require("./models/teams/teams.module");
const filters_module_1 = require("./models/filters/filters.module");
const config_module_1 = require("./models/config/config.module");
const tags_module_1 = require("./models/tags/tags.module");
const banners_module_1 = require("./models/banners/banners.module");
const articles_module_1 = require("./models/articles/articles.module");
const home_module_1 = require("./models/home/home.module");
const sections_module_1 = require("./models/sections/sections.module");
const address_module_1 = require("./models/address/address.module");
const correios_module_1 = require("./models/correios/correios.module");
const contact_module_1 = require("./models/contact/contact.module");
const mercadopago_module_1 = require("./modules/mercadopago/mercadopago.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        controllers: [app_controller_1.AppController],
        imports: [
            prisma_module_1.PrismaModule,
            variants_module_1.VariantsModule,
            s3_module_1.S3Module,
            images_module_1.ImagesModule,
            categorys_module_1.CategorysModule,
            products_module_1.ProductsModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            orders_module_1.OrdersModule,
            coupons_module_1.CouponsModule,
            cart_module_1.CartModule,
            teams_module_1.TeamsModule,
            filters_module_1.FiltersModule,
            config_module_1.ConfigModule,
            tags_module_1.TagsModule,
            banners_module_1.BannersModule,
            articles_module_1.ArticlesModule,
            home_module_1.HomeModule,
            sections_module_1.SectionsModule,
            address_module_1.AddressModule,
            correios_module_1.CorreiosModule,
            contact_module_1.ContactModule,
            mercadopago_module_1.MercadopagoModule,
        ],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map