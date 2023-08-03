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
exports.ArticlesService = void 0;
const s3_service_1 = require("./../../modules/aws/s3/s3.service");
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const prisma_1 = require("../../modules/prisma");
let ArticlesService = class ArticlesService {
    constructor(s3Service, prismaService) {
        this.s3Service = s3Service;
        this.prismaService = prismaService;
    }
    async create(createArticleDto) {
        const url = await this.s3Service.uploadFile(createArticleDto.image);
        return await this.prismaService.article.create({
            data: {
                image: url,
                config_id: 1,
            },
        });
    }
    async findAll(page, page_size) {
        if (!page || !page_size) {
            throw new exceptions_1.BadRequestException('Especifique a página e o tamanho da página.');
        }
        const pagedResult = await this.prismaService.article.findMany({
            skip: (page - 1) * page_size,
            take: page_size,
        });
        const count = await this.prismaService.article.count();
        return {
            count,
            results: pagedResult,
            next: count > page * page_size ? true : false,
            previous: page <= 1 ? false : true,
        };
    }
    async findOne(id) {
        const article = await this.prismaService.article.findUnique({
            where: {
                id,
            },
        });
        if (!article) {
            throw new exceptions_1.NotFoundException(`Artigo não encontrado`);
        }
        return article;
    }
    async remove(id) {
        return this.prismaService.article.delete({
            where: {
                id,
            },
        });
    }
};
ArticlesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [s3_service_1.S3Service,
        prisma_1.PrismaService])
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map