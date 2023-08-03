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
exports.CategorysService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const prisma_service_1 = require("./../../modules/prisma/prisma.service");
let CategorysService = class CategorysService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createCategoryDto) {
        return this.prismaService.category.create({ data: createCategoryDto });
    }
    async findAll(name, page, page_size) {
        if (!page || !page_size) {
            throw new exceptions_1.BadRequestException('Especifique a página e o tamanho da página.');
        }
        const pagedResult = await this.prismaService.category.findMany({
            include: { _count: true },
            where: {
                name: {
                    contains: name,
                },
            },
        });
        const count = await this.prismaService.category.count();
        return {
            count,
            results: pagedResult,
            next: count > page * page_size ? true : false,
            previous: page <= 1 ? false : true,
        };
    }
    async findOne(id) {
        const category = await this.prismaService.category.findUnique({
            where: { id },
            include: { filters: true, _count: true },
        });
        if (!category) {
            throw new exceptions_1.NotFoundException(`Categoria não encontrada`);
        }
        return category;
    }
    async update(id, updateCategoryDto) {
        await this.findOne(id);
        return this.prismaService.category.update({
            where: { id },
            data: updateCategoryDto,
        });
    }
    async remove(id) {
        const category = await this.findOne(id);
        if (category.filters.length > 0) {
            throw new exceptions_1.BadRequestException(`Existem filtros cadastrados nesta categoria, remova-os antes de deletar a categoria`);
        }
        return this.prismaService.category.delete({ where: { id } });
    }
};
CategorysService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategorysService);
exports.CategorysService = CategorysService;
//# sourceMappingURL=categorys.service.js.map