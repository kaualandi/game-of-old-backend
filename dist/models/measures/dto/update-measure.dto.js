"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMeasureDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_measure_dto_1 = require("./create-measure.dto");
class UpdateMeasureDto extends (0, mapped_types_1.PartialType)(create_measure_dto_1.CreateMeasureDto) {
}
exports.UpdateMeasureDto = UpdateMeasureDto;
//# sourceMappingURL=update-measure.dto.js.map