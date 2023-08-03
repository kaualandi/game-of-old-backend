"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSectionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_section_dto_1 = require("./create-section.dto");
class UpdateSectionDto extends (0, mapped_types_1.PartialType)(create_section_dto_1.CreateSectionDto) {
}
exports.UpdateSectionDto = UpdateSectionDto;
//# sourceMappingURL=update-section.dto.js.map