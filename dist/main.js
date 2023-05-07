"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const express_1 = require("express");
const fs = require("fs");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const privateKey = fs.readFileSync('/etc/letsencrypt/live/al-design-api.kaualf.com/privkey.pem', 'utf8');
    const certificate = fs.readFileSync('/etc/letsencrypt/live/al-design-api.kaualf.com/fullchain.pem', 'utf8');
    const httpsOptions = { key: privateKey, cert: certificate };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true, httpsOptions });
    app.enableCors();
    app.use((0, express_1.json)({ limit: '50mb' }));
    app.use((0, express_1.urlencoded)({ extended: true, limit: '50mb' }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map