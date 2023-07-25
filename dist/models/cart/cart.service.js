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
exports.CartService = void 0;
const users_service_1 = require("./../users/users.service");
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../modules/prisma");
let CartService = class CartService {
    constructor(prismaService, usersService) {
        this.prismaService = prismaService;
        this.usersService = usersService;
    }
    async create(createCartDto, user_id) {
        const user = await this.usersService.findOne(user_id);
        return await this.prismaService.cartItem.create({
            data: Object.assign(Object.assign({}, createCartDto), { product_variant: {
                    connect: {
                        id: createCartDto.product_variant,
                    },
                }, cart: {
                    connect: {
                        id: user.cart.id,
                    },
                } }),
        });
    }
    async findAll(user_id) {
        const user = await this.usersService.findOne(user_id);
        return await this.prismaService.cartItem.findMany({
            where: {
                cart_id: user.cart.id,
            },
            include: {
                product_variant: {
                    include: {
                        product: true,
                    },
                },
            },
        });
    }
    async findOne(id, user_id) {
        const user = await this.usersService.findOne(user_id);
        const cartItem = await this.prismaService.cartItem.findUnique({
            where: {
                id,
                cart_id: user.cart.id,
            },
            include: {
                product_variant: {
                    include: {
                        product: true,
                    },
                },
            },
        });
        if (!cartItem) {
            throw new common_1.NotFoundException(`Item do carrinho não encontrado`);
        }
        return cartItem;
    }
    async update(id, updateCartDto, user_id) {
        await this.findOne(id, user_id);
        const user = await this.usersService.findOne(user_id);
        const { quantity, customization, customization_name, customization_number, } = updateCartDto;
        return await this.prismaService.cartItem.update({
            where: {
                id,
                cart_id: user.cart.id,
            },
            data: {
                quantity,
                customization,
                customization_name,
                customization_number,
            },
        });
    }
    async remove(id, user_id) {
        await this.findOne(id, user_id);
        const user = await this.usersService.findOne(user_id);
        return await this.prismaService.cartItem.delete({
            where: {
                id,
                cart_id: user.cart.id,
            },
        });
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService,
        users_service_1.UsersService])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map