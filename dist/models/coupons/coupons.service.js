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
exports.CouponsService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const prisma_1 = require("../../modules/prisma");
let CouponsService = class CouponsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createCouponDto) {
        const coupon = await this.findByCode(createCouponDto.code);
        if (coupon) {
            throw new exceptions_1.NotFoundException('Já existe um cupom com esse código');
        }
        return this.prismaService.coupon.create({
            data: createCouponDto,
        });
    }
    async findAll(name, page, page_size) {
        if (!page || !page_size) {
            throw new exceptions_1.BadRequestException('Especifique a página e o tamanho da página.');
        }
        const pagedResult = await this.prismaService.coupon.findMany({
            where: {
                code: {
                    contains: name,
                },
            },
            skip: (page - 1) * page_size,
            take: page_size,
        });
        const count = await this.prismaService.coupon.count();
        return {
            count,
            results: pagedResult,
            next: count > page * page_size ? true : false,
            previous: page <= 1 ? false : true,
        };
    }
    async findOne(id) {
        const coupon = await this.prismaService.coupon.findUnique({
            where: {
                id,
            },
        });
        if (!coupon) {
            throw new exceptions_1.NotFoundException('Cupom não encontrado');
        }
        return coupon;
    }
    async update(id, updateCouponDto) {
        await this.findOne(id);
        const coupon = await this.findByCode(updateCouponDto.code);
        if (coupon && coupon.id !== id) {
            throw new exceptions_1.NotFoundException('Já existe um cupom com esse código');
        }
        return this.prismaService.coupon.update({
            where: {
                id,
            },
            data: updateCouponDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prismaService.coupon.delete({
            where: {
                id,
            },
        });
    }
    async findByCode(code) {
        return await this.prismaService.coupon.findUnique({
            where: {
                code,
            },
        });
    }
};
CouponsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], CouponsService);
exports.CouponsService = CouponsService;
//# sourceMappingURL=coupons.service.js.map