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
exports.HomeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../modules/prisma");
let HomeService = class HomeService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async config() {
        return await this.prismaService.config.findUnique({
            where: { id: 1 },
            include: {
                tags: true,
                articles: true,
                banners: true,
                _count: true,
            },
        });
    }
    async teamsSellers() {
        const teams = await this.prismaService.team.findMany();
        const products = await this.prismaService.product.findMany({
            orderBy: {
                sold: 'desc',
            },
            include: {
                team: true,
                images: true,
            },
            take: 5,
        });
        return {
            teams,
            products,
        };
    }
    async releases() {
        return await this.prismaService.product.findMany({
            orderBy: {
                created_at: 'desc',
            },
            take: 5,
        });
    }
};
HomeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], HomeService);
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map