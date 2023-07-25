"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCouponDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_coupon_dto_1 = require("./create-coupon.dto");
class UpdateCouponDto extends (0, mapped_types_1.PartialType)(create_coupon_dto_1.CreateCouponDto) {
}
exports.UpdateCouponDto = UpdateCouponDto;
//# sourceMappingURL=update-coupon.dto.js.map