"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Service = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const AWS = require("aws-sdk");
let S3Service = class S3Service {
    constructor() {
        this.s3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION,
        });
    }
    async uploadFile(base64) {
        try {
            if (!base64)
                return null;
            if (base64.startsWith('http'))
                return base64;
            const bufferImage = Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ''), 'base64');
            const params = {
                Bucket: process.env.AWS_S3_BUCKET_NAME,
                Key: `${Date.now()}.jpg`,
                Body: bufferImage,
                ContentType: 'image/jpg',
            };
            const { Location } = await this.s3.upload(params).promise();
            return Location;
        }
        catch (error) {
            throw new exceptions_1.BadRequestException('Imagem inválida');
        }
    }
};
S3Service = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], S3Service);
exports.S3Service = S3Service;
//# sourceMappingURL=s3.service.js.map