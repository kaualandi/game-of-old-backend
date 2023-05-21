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
const prisma_1 = require("../../modules/prisma");
let OrdersService = class OrdersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createOrderDto) {
        const { order_items } = createOrderDto, order = __rest(createOrderDto, ["order_items"]);
        const createdOrder = await this.prismaService.order.create({ data: order });
        if (order_items.length > 0) {
            for (const item of order_items) {
                await this.prismaService.orderItem.create({
                    data: Object.assign(Object.assign({}, item), { order_id: createdOrder.id }),
                });
            }
        }
        return createdOrder;
    }
    findAll() {
        return this.prismaService.order.findMany({
            include: {
                order_items: true,
                _count: true,
            },
        });
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
            throw new common_1.NotFoundException(`Pedido não encontrado`);
        }
        return order;
    }
    async update(id, updateOrderDto) {
        await this.findOne(id);
        const { order_items } = updateOrderDto, order = __rest(updateOrderDto, ["order_items"]);
        const updatedOrder = await this.prismaService.order.update({
            where: { id },
            data: order,
        });
        if (order_items.length > 0) {
            for (const item of order_items) {
                if (item.id) {
                    await this.prismaService.orderItem.update({
                        where: { id: item.id },
                        data: Object.assign(Object.assign({}, item), { order_id: updatedOrder.id }),
                    });
                }
                else {
                    await this.prismaService.orderItem.create({
                        data: Object.assign(Object.assign({}, item), { order_id: updatedOrder.id }),
                    });
                }
            }
        }
        return updatedOrder;
    }
    async remove(id) {
        const order = await this.findOne(id);
        for (const item of order.order_items) {
            await this.prismaService.orderItem.delete({ where: { id: item.id } });
        }
        return this.prismaService.order.delete({ where: { id } });
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map