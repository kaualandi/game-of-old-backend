"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVariationsDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_variations_dto_1 = require("./create-variations.dto");
class UpdateVariationsDto extends (0, mapped_types_1.PartialType)(create_variations_dto_1.CreateVariationsDto) {
}
exports.UpdateVariationsDto = UpdateVariationsDto;
//# sourceMappingURL=update-variations.dto.js.map