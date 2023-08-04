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
exports.SectionsService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const prisma_1 = require("../../modules/prisma");
let SectionsService = class SectionsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createSectionDto) {
        return this.prismaService.section.create({ data: createSectionDto });
    }
    async findAll(name, page, page_size) {
        if (!page || !page_size) {
            throw new exceptions_1.BadRequestException('Especifique a página e o tamanho da página.');
        }
        const pagedResult = await this.prismaService.section.findMany({
            where: { name: { contains: name } },
            include: { categorys: true },
            skip: (page - 1) * page_size,
            take: page_size,
        });
        const count = await this.prismaService.section.count();
        return {
            count,
            results: pagedResult,
            next: count > page * page_size ? true : false,
            previous: page <= 1 ? false : true,
        };
    }
    async findOne(id) {
        const filter = await this.prismaService.section.findUnique({
            where: { id },
            include: { categorys: true },
        });
        if (!filter) {
            throw new exceptions_1.NotFoundException(`Filtro não encontrado`);
        }
        return filter;
    }
    async update(id, updateSectionDto) {
        await this.findOne(id);
        return this.prismaService.section.update({
            where: { id },
            data: updateSectionDto,
        });
    }
    async remove(id) {
        const section = await this.findOne(id);
        if (section.categorys.length > 0) {
            throw new exceptions_1.BadRequestException(`Existem categorias cadastradas nesta sessão, remova-as antes de deletar a sessão`);
        }
        return this.prismaService.section.delete({ where: { id } });
    }
};
SectionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], SectionsService);
exports.SectionsService = SectionsService;
//# sourceMappingURL=sections.service.js.map