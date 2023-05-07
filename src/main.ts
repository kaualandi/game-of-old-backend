import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import * as fs from 'fs';
import { AppModule } from './app.module';

async function bootstrap() {
  const privateKey = fs.readFileSync(
    '/etc/letsencrypt/live/al-design-api.kaualf.com/privkey.pem',
    'utf8',
  );
  const certificate = fs.readFileSync(
    '/etc/letsencrypt/live/al-design-api.kaualf.com/fullchain.pem',
    'utf8',
  );
  const httpsOptions = { key: privateKey, cert: certificate };

  const app = await NestFactory.create(AppModule, { cors: true, httpsOptions });
  app.enableCors();
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  await app.listen(3000);
}
bootstrap();
