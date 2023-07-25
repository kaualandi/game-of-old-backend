"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVariantsDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_variants_dto_1 = require("./create-variants.dto");
class UpdateVariantsDto extends (0, mapped_types_1.PartialType)(create_variants_dto_1.CreateVariantsDto) {
}
exports.UpdateVariantsDto = UpdateVariantsDto;
//# sourceMappingURL=update-variants.dto.js.map