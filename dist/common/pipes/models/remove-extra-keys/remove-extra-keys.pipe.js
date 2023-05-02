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
exports.RemoveExtraKeysPipe = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let RemoveExtraKeysPipe = class RemoveExtraKeysPipe {
    constructor(allowedKeys) {
        this.allowedKeys = allowedKeys;
    }
    async transform(value, metadata) {
        if (metadata.type !== 'body') {
            return value;
        }
        const filteredObject = {};
        for (const key of this.allowedKeys) {
            if (key in value) {
                filteredObject[key] = value[key];
            }
        }
        const object = (0, class_transformer_1.plainToClass)(metadata.metatype, filteredObject);
        const errors = await (0, class_validator_1.validate)(object);
        if (errors.length > 0) {
            throw new common_1.BadRequestException(errors);
        }
        return filteredObject;
    }
};
RemoveExtraKeysPipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Array])
], RemoveExtraKeysPipe);
exports.RemoveExtraKeysPipe = RemoveExtraKeysPipe;
//# sourceMappingURL=remove-extra-keys.pipe.js.map