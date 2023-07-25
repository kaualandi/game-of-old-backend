"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFilterDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_filter_dto_1 = require("./create-filter.dto");
class UpdateFilterDto extends (0, mapped_types_1.PartialType)(create_filter_dto_1.CreateFilterDto) {
}
exports.UpdateFilterDto = UpdateFilterDto;
//# sourceMappingURL=update-filter.dto.js.map