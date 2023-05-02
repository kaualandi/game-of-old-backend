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
exports.ImagesService = void 0;
const s3_service_1 = require("./../../modules/aws/s3/s3.service");
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../modules/prisma");
let ImagesService = class ImagesService {
    constructor(prismaService, s3Service) {
        this.prismaService = prismaService;
        this.s3Service = s3Service;
    }
    async create(createImageDto) {
        const imageUrl = await this.s3Service.uploadFile(createImageDto.url);
        createImageDto.url = imageUrl;
        return this.prismaService.image.create({ data: createImageDto });
    }
    findAll() {
        return this.prismaService.image.findMany();
    }
    async findOne(id) {
        const image = await this.prismaService.image.findUnique({
            where: { id },
            include: { product: true },
        });
        if (!image) {
            throw new common_1.NotFoundException(`Imagem não encontrada`);
        }
        return image;
    }
    async update(id, updateImageDto) {
        await this.findOne(id);
        const imageUrl = await this.s3Service.uploadFile(updateImageDto.url);
        updateImageDto.url = imageUrl;
        return this.prismaService.image.update({
            where: { id },
            data: updateImageDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prismaService.image.delete({ where: { id } });
    }
};
ImagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService,
        s3_service_1.S3Service])
], ImagesService);
exports.ImagesService = ImagesService;
//# sourceMappingURL=images.service.js.map