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
exports.FiltersService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const prisma_1 = require("../../modules/prisma");
let FiltersService = class FiltersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createFilterDto) {
        return this.prismaService.filter.create({ data: createFilterDto });
    }
    async findAll(name, page, page_size) {
        if (!page || !page_size) {
            throw new exceptions_1.BadRequestException('Especifique a página e o tamanho da página.');
        }
        const pagedResult = await this.prismaService.filter.findMany({
            where: { name: { contains: name } },
            include: { category: { include: { section: true } }, products: true },
            skip: (page - 1) * page_size,
            take: page_size,
        });
        const count = await this.prismaService.filter.count();
        return {
            count,
            results: pagedResult,
            next: count > page * page_size ? true : false,
            previous: page <= 1 ? false : true,
        };
    }
    async findOne(id) {
        const filter = await this.prismaService.filter.findUnique({
            where: { id },
            include: { category: true, products: true },
        });
        if (!filter) {
            throw new exceptions_1.NotFoundException(`Filtro não encontrado`);
        }
        return filter;
    }
    async update(id, updateFilterDto) {
        await this.findOne(id);
        return this.prismaService.filter.update({
            where: { id },
            data: updateFilterDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return await this.prismaService.filter.delete({ where: { id } });
    }
};
FiltersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], FiltersService);
exports.FiltersService = FiltersService;
//# sourceMappingURL=filters.service.js.map