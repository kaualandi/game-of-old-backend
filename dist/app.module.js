"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./modules/auth/auth.module");
const room_module_1 = require("./modules/room/room.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        controllers: [app_controller_1.AppController],
        imports: [
            room_module_1.RoomModule,
            axios_1.HttpModule,
            auth_module_1.AuthModule,
            jwt_1.JwtModule.register({
                secret: 'ebd1b76961d7d38aca2bd7b141f9a163',
                signOptions: { expiresIn: '1d' },
            }),
        ],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map