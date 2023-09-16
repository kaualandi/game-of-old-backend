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
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const prisma_1 = require("../../modules/prisma");
let AddressService = class AddressService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createAddressDto, user_id) {
        return this.prisma.address.create({
            data: Object.assign(Object.assign({}, createAddressDto), { user: {
                    connect: {
                        id: user_id,
                    },
                } }),
        });
    }
    async findOne(id, user_id) {
        const address = await this.prisma.address.findUnique({
            where: {
                id,
                user_id,
                is_active: true,
            },
        });
        if (!address) {
            throw new exceptions_1.NotFoundException(`Endereço não encontrado`);
        }
        return address;
    }
    async update(id, updateAddressDto, user_id) {
        await this.findOne(id, user_id);
        return this.prisma.address.update({
            where: {
                id,
                user_id,
            },
            data: updateAddressDto,
        });
    }
    async remove(id, user_id) {
        await this.findOne(id, user_id);
        return this.prisma.address.update({
            where: {
                id,
                user_id,
            },
            data: {
                is_active: false,
            },
        });
    }
};
AddressService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], AddressService);
exports.AddressService = AddressService;
//# sourceMappingURL=address.service.js.map