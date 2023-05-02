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
exports.VariationsService = void 0;
const s3_service_1 = require("./../../modules/aws/s3/s3.service");
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../modules/prisma");
let VariationsService = class VariationsService {
    constructor(prismaService, s3Service) {
        this.prismaService = prismaService;
        this.s3Service = s3Service;
    }
    async create(createVariationsDto) {
        const imageUrl = await this.s3Service.uploadFile(createVariationsDto.image);
        createVariationsDto.image = imageUrl;
        return this.prismaService.variation.create({ data: createVariationsDto });
    }
    findAll(name) {
        return this.prismaService.variation.findMany({
            include: {
                product: true,
            },
            where: {
                name: {
                    contains: name,
                },
            },
        });
    }
    async findOne(id) {
        const variation = await this.prismaService.variation.findUnique({
            where: { id },
        });
        if (!variation) {
            throw new common_1.NotFoundException(`Variação não encontrada`);
        }
        return variation;
    }
    async update(id, updateVariationsDto) {
        var _a;
        await this.findOne(id);
        if (!((_a = updateVariationsDto === null || updateVariationsDto === void 0 ? void 0 : updateVariationsDto.image) === null || _a === void 0 ? void 0 : _a.startsWith('http'))) {
            const imageUrl = await this.s3Service.uploadFile(updateVariationsDto.image);
            updateVariationsDto.image = imageUrl;
        }
        return this.prismaService.variation.update({
            where: { id },
            data: updateVariationsDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prismaService.variation.delete({ where: { id } });
    }
};
VariationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService,
        s3_service_1.S3Service])
], VariationsService);
exports.VariationsService = VariationsService;
//# sourceMappingURL=variations.service.js.map