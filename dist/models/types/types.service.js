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
exports.TypesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../modules/prisma");
let TypesService = class TypesService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createTypeDto) {
        return this.prismaService.type.create({ data: createTypeDto });
    }
    findAll(name) {
        return this.prismaService.type.findMany({
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
        const type = await this.prismaService.type.findUnique({ where: { id } });
        if (!type) {
            throw new common_1.NotFoundException(`Tipo não encontrado`);
        }
        return type;
    }
    async update(id, updateTypeDto) {
        await this.findOne(id);
        return this.prismaService.type.update({
            where: { id },
            data: updateTypeDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prismaService.type.delete({ where: { id } });
    }
};
TypesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], TypesService);
exports.TypesService = TypesService;
//# sourceMappingURL=types.service.js.map