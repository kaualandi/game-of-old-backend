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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const images_service_1 = require("./../images/images.service");
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../modules/prisma");
const types_service_1 = require("../types/types.service");
const variations_service_1 = require("../variations/variations.service");
let ProductsService = class ProductsService {
    constructor(prismaService, imagesService, typesService, variationsService) {
        this.prismaService = prismaService;
        this.imagesService = imagesService;
        this.typesService = typesService;
        this.variationsService = variationsService;
    }
    async create(createProductDto) {
        const { images } = createProductDto, product = __rest(createProductDto, ["images"]);
        try {
            const productCreated = await this.prismaService.product.create({
                data: product,
            });
            if (images.length > 0) {
                for (const image of images) {
                    await this.imagesService.create({
                        product_id: productCreated.id,
                        url: image,
                    });
                }
            }
            return productCreated;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    findAll(name) {
        return this.prismaService.product.findMany({
            include: {
                images: true,
                category: true,
                measure: true,
                types: true,
                variations: true,
                _count: true,
            },
            where: {
                name: {
                    contains: name,
                },
            },
        });
    }
    async findOne(id) {
        const product = await this.prismaService.product.findUnique({
            where: {
                id,
            },
            include: {
                images: true,
                category: true,
                measure: true,
                types: true,
                variations: true,
            },
        });
        if (!product) {
            throw new common_1.NotFoundException(`Produto não encontrado`);
        }
        return product;
    }
    async update(id, updateProductDto) {
        await this.findOne(id);
        const { images } = updateProductDto, product = __rest(updateProductDto, ["images"]);
        try {
            const productUpdate = await this.prismaService.product.update({
                where: {
                    id,
                },
                data: product,
            });
            if (images.length > 0) {
                for (const image of images) {
                    await this.imagesService.create({
                        product_id: productUpdate.id,
                        url: image,
                    });
                }
            }
            return productUpdate;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async remove(id) {
        const product = await this.findOne(id);
        for (const image of product.images) {
            await this.imagesService.remove(image.id);
        }
        for (const type of product.types) {
            await this.typesService.remove(type.id);
        }
        for (const variation of product.variations) {
            await this.variationsService.remove(variation.id);
        }
        return this.prismaService.product.delete({
            where: {
                id,
            },
        });
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService,
        images_service_1.ImagesService,
        types_service_1.TypesService,
        variations_service_1.VariationsService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map