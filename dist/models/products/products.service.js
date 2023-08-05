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
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const prisma_1 = require("../../modules/prisma");
const variants_service_1 = require("../variants/variants.service");
const images_service_1 = require("./../images/images.service");
let ProductsService = class ProductsService {
    constructor(prismaService, imagesService, variantsService) {
        this.prismaService = prismaService;
        this.imagesService = imagesService;
        this.variantsService = variantsService;
    }
    async create(createProductDto) {
        const { images, filters, team_id } = createProductDto, product = __rest(createProductDto, ["images", "filters", "team_id"]);
        try {
            const productCreated = await this.prismaService.product.create({
                data: Object.assign(Object.assign({}, product), { team: {
                        connect: {
                            id: team_id,
                        },
                    } }),
            });
            if (images.length > 0) {
                for (const image of images) {
                    await this.imagesService.create({
                        product_id: productCreated.id,
                        url: image,
                    });
                }
            }
            if (filters.length > 0) {
                await this.prismaService.product.update({
                    where: {
                        id: productCreated.id,
                    },
                    data: {
                        filters: {
                            createMany: {
                                data: filters.map((filter) => ({
                                    filter_id: filter,
                                    product_id: productCreated.id,
                                })),
                            },
                        },
                    },
                });
            }
            return productCreated;
        }
        catch (error) {
            throw new exceptions_1.BadRequestException(error.message);
        }
    }
    async findAll(name, page, page_size) {
        if (!page || !page_size) {
            throw new exceptions_1.BadRequestException('Especifique a página e o tamanho da página.');
        }
        const pagedResult = await this.prismaService.product.findMany({
            include: {
                images: true,
                variants: true,
                _count: true,
            },
            where: {
                name: {
                    contains: name,
                },
            },
            skip: (page - 1) * page_size,
            take: page_size,
        });
        const count = await this.prismaService.product.count();
        return {
            count,
            results: pagedResult,
            next: count > page * page_size ? true : false,
            previous: page <= 1 ? false : true,
        };
    }
    async findOne(id) {
        const product = await this.prismaService.product.findUnique({
            where: {
                id,
            },
            include: {
                images: true,
                variants: true,
            },
        });
        if (!product) {
            throw new exceptions_1.NotFoundException(`Produto não encontrado`);
        }
        return product;
    }
    async update(id, updateProductDto) {
        await this.findOne(id);
        const { images, team_id, filters } = updateProductDto, product = __rest(updateProductDto, ["images", "team_id", "filters"]);
        try {
            const productUpdate = await this.prismaService.product.update({
                where: {
                    id,
                },
                data: Object.assign(Object.assign({}, product), { team: {
                        connect: {
                            id: team_id,
                        },
                    }, filters: {
                        connect: filters.map((filter) => ({
                            id: filter,
                        })),
                    } }),
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
            throw new exceptions_1.BadRequestException(error.message);
        }
    }
    async remove(id) {
        const product = await this.findOne(id);
        for (const image of product.images) {
            await this.imagesService.remove(image.id);
        }
        for (const variant of product.variants) {
            await this.variantsService.remove(variant.id);
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
        variants_service_1.VariantsService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map