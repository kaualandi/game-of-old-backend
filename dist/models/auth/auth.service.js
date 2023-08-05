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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signIn(createAuthDto) {
        const { email, password: pass } = createAuthDto;
        const user = await this.usersService.findOneByEmail(email);
        if ((user === null || user === void 0 ? void 0 : user.password) !== pass) {
            throw new common_1.BadRequestException('E-mail ou senha inválidos');
        }
        const payload = { email: user.email, id: user.id, admin: user.is_admin };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
    async signUp(createUserDto) {
        const user = await this.usersService.create(createUserDto);
        const payload = { email: user.email, id: user.id, admin: user.is_admin };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
    getMe(id) {
        return this.usersService.findOne(parseInt(id));
    }
    async changePassword(id, changePasswordDto) {
        const user = await this.usersService.findOneWithPassword(parseInt(id));
        if (user.password !== changePasswordDto.old_password) {
            throw new common_1.BadRequestException('Senha atual incorreta');
        }
        user.password = changePasswordDto.new_password;
        await this.usersService.update(parseInt(id), user);
    }
    async update(id, updateUserDto) {
        await this.usersService.findOne(parseInt(id));
        await this.usersService.update(parseInt(id), updateUserDto);
        return this.usersService.findOne(parseInt(id));
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map