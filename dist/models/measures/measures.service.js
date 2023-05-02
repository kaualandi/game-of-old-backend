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
exports.MeasuresService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./../../modules/prisma/prisma.service");
let MeasuresService = class MeasuresService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createMeasureDto) {
        return this.prismaService.measure.create({ data: createMeasureDto });
    }
    findAll(name) {
        return this.prismaService.measure.findMany({
            include: { _count: true },
            where: {
                name: {
                    contains: name,
                },
            },
        });
    }
    async findOne(id) {
        const measure = await this.prismaService.measure.findUnique({
            where: { id },
            include: { _count: { select: { products: true } } },
        });
        if (!measure) {
            throw new common_1.NotFoundException(`Medida não encontrada`);
        }
        return measure;
    }
    async update(id, updateMeasureDto) {
        await this.findOne(id);
        return this.prismaService.measure.update({
            where: { id },
            data: updateMeasureDto,
        });
    }
    async remove(id) {
        const measure = await this.findOne(id);
        if (measure._count.products > 0) {
            throw new common_1.BadRequestException(`Existem produtos cadastrados nesta medida, remova os produtos antes de deletar a medida`);
        }
        return this.prismaService.measure.delete({ where: { id } });
    }
};
MeasuresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MeasuresService);
exports.MeasuresService = MeasuresService;
//# sourceMappingURL=measures.service.js.map