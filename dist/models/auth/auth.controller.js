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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const remove_extra_keys_pipe_1 = require("../../common/pipes/models/remove-extra-keys/remove-extra-keys.pipe");
const auth_guard_1 = require("../../common/guards/auth.guard");
const auth_service_1 = require("./auth.service");
const change_password_1 = require("./dto/change-password");
const sign_in_dto_1 = require("./dto/sign-in.dto");
const sign_up_dto_1 = require("./dto/sign-up.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signIn(createAuthDto) {
        return this.authService.signIn(createAuthDto);
    }
    signUp(createUserDto) {
        return this.authService.signUp(createUserDto);
    }
    getMe(request) {
        return this.authService.getMe(request.user_id);
    }
    changePassword(request, changePasswordDto) {
        return this.authService.changePassword(request.user_id, changePasswordDto);
    }
    update(request, updateUserDto) {
        return this.authService.update(request.user_id, updateUserDto);
    }
};
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_in_dto_1.SignInDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)('sign-up'),
    (0, common_1.UsePipes)(new remove_extra_keys_pipe_1.RemoveExtraKeysPipe([
        'email',
        'password',
        'name',
        'phone',
        'cpf',
        'google_id',
        'birth_date',
        'is_admin',
    ])),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_up_dto_1.SignUpDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getMe", null);
__decorate([
    (0, common_1.Post)('change-password'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_password_1.ChangePasswordDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('update'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UsePipes)(new remove_extra_keys_pipe_1.RemoveExtraKeysPipe(['email', 'name', 'phone', 'cpf', 'birth_date'])),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "update", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map