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
exports.VariantsService = void 0;
const s3_service_1 = require("./../../modules/aws/s3/s3.service");
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../modules/prisma");
let VariantsService = class VariantsService {
    constructor(prismaService, s3Service) {
        this.prismaService = prismaService;
        this.s3Service = s3Service;
    }
    async create(createVariantsDto) {
        const imageUrl = await this.s3Service.uploadFile(createVariantsDto.image);
        createVariantsDto.image = imageUrl;
        return this.prismaService.variant.create({ data: createVariantsDto });
    }
    findAll(name) {
        return this.prismaService.variant.findMany({
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
        const variant = await this.prismaService.variant.findUnique({
            where: { id },
        });
        if (!variant) {
            throw new common_1.NotFoundException(`Variação não encontrada`);
        }
        return variant;
    }
    async update(id, updateVariantsDto) {
        var _a;
        await this.findOne(id);
        if (!((_a = updateVariantsDto === null || updateVariantsDto === void 0 ? void 0 : updateVariantsDto.image) === null || _a === void 0 ? void 0 : _a.startsWith('http'))) {
            const imageUrl = await this.s3Service.uploadFile(updateVariantsDto.image);
            updateVariantsDto.image = imageUrl;
        }
        return this.prismaService.variant.update({
            where: { id },
            data: updateVariantsDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prismaService.variant.delete({ where: { id } });
    }
};
VariantsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService,
    s3_service_1.S3Service])
], VariantsService);
exports.VariantsService = VariantsService;
//# sourceMappingURL=variants.service.js.map