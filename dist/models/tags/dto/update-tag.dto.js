"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTagDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tag_dto_1 = require("./create-tag.dto");
class UpdateTagDto extends (0, mapped_types_1.PartialType)(create_tag_dto_1.CreateTagDto) {
}
exports.UpdateTagDto = UpdateTagDto;
//# sourceMappingURL=update-tag.dto.js.map