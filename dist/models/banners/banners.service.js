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
exports.BannersService = void 0;
const common_1 = require("@nestjs/common");
const s3_service_1 = require("../../modules/aws/s3/s3.service");
const prisma_1 = require("../../modules/prisma");
let BannersService = class BannersService {
    constructor(s3Service, prismaService) {
        this.s3Service = s3Service;
        this.prismaService = prismaService;
    }
    async create(createBannerDto) {
        const url = await this.s3Service.uploadFile(createBannerDto.image);
        return await this.prismaService.banner.create({
            data: {
                image: url,
                config_id: 1,
            },
        });
    }
    async findAll(page, page_size) {
        if (!page || !page_size) {
            throw new common_1.NotFoundException('Especifique a página e o tamanho da página.');
        }
        const pagedResult = await this.prismaService.banner.findMany({
            skip: (page - 1) * page_size,
            take: page_size,
        });
        const count = await this.prismaService.banner.count();
        return {
            count,
            results: pagedResult,
            next: count > page * page_size ? true : false,
            previous: page <= 1 ? false : true,
        };
    }
    async findOne(id) {
        const banner = this.prismaService.banner.findUnique({
            where: {
                id,
            },
        });
        if (!banner) {
            throw new common_1.NotFoundException(`Banner não encontrado`);
        }
        return banner;
    }
    async remove(id) {
        await this.findOne(id);
        return this.prismaService.banner.delete({
            where: {
                id,
            },
        });
    }
};
BannersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [s3_service_1.S3Service,
        prisma_1.PrismaService])
], BannersService);
exports.BannersService = BannersService;
//# sourceMappingURL=banners.service.js.map