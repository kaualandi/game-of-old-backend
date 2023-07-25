"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCartDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cart_dto_1 = require("./create-cart.dto");
class UpdateCartDto extends (0, mapped_types_1.PartialType)(create_cart_dto_1.CreateCartDto) {
}
exports.UpdateCartDto = UpdateCartDto;
//# sourceMappingURL=update-cart.dto.js.map