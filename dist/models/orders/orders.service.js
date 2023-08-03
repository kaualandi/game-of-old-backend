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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const prisma_1 = require("../../modules/prisma");
let OrdersService = class OrdersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createOrderDto) {
        const { order_items, card_number, card_validity, card_holder_name, user_id, address_id } = createOrderDto, order = __rest(createOrderDto, ["order_items", "card_number", "card_validity", "card_holder_name", "user_id", "address_id"]);
        const createdOrder = await this.prismaService.order.create({
            data: Object.assign(Object.assign({}, order), { user: { connect: { id: user_id } }, address: { connect: { id: address_id } } }),
        });
        if (order_items.length > 0) {
            for (const item of order_items) {
                const productVariant = await this.prismaService.productVariant.findUnique({
                    where: { id: item.product_variant_id },
                    include: { product: true },
                });
                await this.prismaService.product.update({
                    where: { id: productVariant.product.id },
                    data: {
                        sold: productVariant.product.sold + item.quantity,
                    },
                });
                await this.prismaService.orderItem.create({
                    data: Object.assign(Object.assign({}, item), { order_id: createdOrder.id }),
                });
            }
        }
        return {
            worked: true,
            status: 'PENDING',
            order_id: createdOrder.id,
            qr_code: null,
        };
    }
    async findAll(page, page_size) {
        if (!page || !page_size) {
            throw new exceptions_1.BadRequestException('Especifique a página e o tamanho da página.');
        }
        const pagedResult = await this.prismaService.order.findMany({
            include: {
                order_items: true,
                _count: true,
            },
        });
        const count = await this.prismaService.order.count();
        return {
            count,
            results: pagedResult,
            next: count > page * page_size ? true : false,
            previous: page <= 1 ? false : true,
        };
    }
    async findOne(id) {
        const order = await this.prismaService.order.findUnique({
            where: { id },
            include: {
                order_items: true,
                _count: true,
            },
        });
        if (!order) {
            throw new exceptions_1.NotFoundException(`Pedido não encontrado`);
        }
        return order;
    }
    async update(id, updateOrderDto) {
        await this.findOne(id);
        const { order_items } = updateOrderDto, order = __rest(updateOrderDto, ["order_items"]);
        const updatedOrder = await this.prismaService.order.update({
            where: { id },
            data: Object.assign({}, order),
        });
        return updatedOrder;
    }
    async remove(id) {
        const order = await this.findOne(id);
        for (const item of order.order_items) {
            await this.prismaService.orderItem.delete({ where: { id: item.id } });
        }
        return this.prismaService.order.delete({ where: { id } });
    }
    async cancel(id, user_id) {
        const order = await this.findOne(id);
        const user = await this.prismaService.user.findUnique({
            where: { id: user_id },
        });
        if (order.user_id !== user_id && !user.is_admin) {
            throw new exceptions_1.NotFoundException(`Pedido não encontrado.`);
        }
        if (order.status === 'CANCELLED') {
            throw new exceptions_1.NotFoundException(`Pedido já cancelado.`);
        }
        if (order.status.match(/(SENT|DELIVERED)/)) {
            throw new exceptions_1.NotFoundException(`Impossível cancelar esse pedido no estado atual.`);
        }
        return this.prismaService.order.update({
            where: { id },
            data: {
                status: 'CANCELLED',
            },
        });
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map