"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateImageDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_image_dto_1 = require("./create-image.dto");
class UpdateImageDto extends (0, mapped_types_1.PartialType)(create_image_dto_1.CreateImageDto) {
}
exports.UpdateImageDto = UpdateImageDto;
//# sourceMappingURL=update-image.dto.js.map