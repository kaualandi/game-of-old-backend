"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTeamDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_team_dto_1 = require("./create-team.dto");
class UpdateTeamDto extends (0, mapped_types_1.PartialType)(create_team_dto_1.CreateTeamDto) {
}
exports.UpdateTeamDto = UpdateTeamDto;
//# sourceMappingURL=update-team.dto.js.map