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
exports.TeamsService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const s3_service_1 = require("../../modules/aws/s3/s3.service");
const prisma_1 = require("../../modules/prisma");
let TeamsService = class TeamsService {
    constructor(prismaService, s3Service) {
        this.prismaService = prismaService;
        this.s3Service = s3Service;
    }
    async create(createTeamDto) {
        const { url } = createTeamDto;
        createTeamDto.url = await this.s3Service.uploadFile(url);
        return this.prismaService.team.create({
            data: createTeamDto,
        });
    }
    async findAll(name, page, page_size) {
        if (!page || !page_size) {
            throw new exceptions_1.BadRequestException('Especifique a página e o tamanho da página.');
        }
        const pagedResult = await this.prismaService.team.findMany({
            where: { name: { contains: name } },
            skip: (page - 1) * page_size,
            take: page_size,
        });
        const count = await this.prismaService.team.count();
        return {
            count,
            results: pagedResult,
            next: count > page * page_size ? true : false,
            previous: page <= 1 ? false : true,
        };
    }
    async findOne(id) {
        const team = await this.prismaService.team.findUnique({
            where: { id },
            include: {
                products: true,
            },
        });
        if (!team) {
            throw new exceptions_1.NotFoundException(`Time não encontrado`);
        }
        return team;
    }
    async update(id, updateTeamDto) {
        await this.findOne(id);
        if (!(updateTeamDto === null || updateTeamDto === void 0 ? void 0 : updateTeamDto.url)) {
            updateTeamDto.url = await this.s3Service.uploadFile(updateTeamDto.url);
        }
        return this.prismaService.team.update({
            where: { id },
            data: updateTeamDto,
        });
    }
    async remove(id) {
        const team = await this.findOne(id);
        if (team.products.length > 0) {
            throw new exceptions_1.NotFoundException(`Não é possível excluir um time que possui produtos`);
        }
        return this.prismaService.team.delete({ where: { id } });
    }
};
TeamsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService,
        s3_service_1.S3Service])
], TeamsService);
exports.TeamsService = TeamsService;
//# sourceMappingURL=teams.service.js.map