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
exports.TagsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../modules/prisma");
let TagsService = class TagsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createTagDto) {
        return this.prismaService.tag.create({
            data: Object.assign(Object.assign({}, createTagDto), { config_id: 1 }),
        });
    }
    async findAll(name, page, page_size) {
        if (!page || !page_size) {
            throw new common_1.NotFoundException('Especifique a página e o tamanho da página.');
        }
        const pagedResult = await this.prismaService.tag.findMany({
            where: { name: { contains: name } },
            skip: (page - 1) * page_size,
            take: page_size,
        });
        const count = await this.prismaService.tag.count();
        return {
            count,
            results: pagedResult,
            next: count > page * page_size ? true : false,
            previous: page <= 1 ? false : true,
        };
    }
    async findOne(id) {
        const tag = await this.prismaService.tag.findUnique({
            where: { id },
        });
        if (!tag) {
            throw new common_1.NotFoundException(`Tag não encontrada`);
        }
        return tag;
    }
    async update(id, updateTagDto) {
        await this.findOne(id);
        return this.prismaService.tag.update({
            where: { id },
            data: updateTagDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prismaService.tag.delete({
            where: { id },
        });
    }
};
TagsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], TagsService);
exports.TagsService = TagsService;
//# sourceMappingURL=tags.service.js.map