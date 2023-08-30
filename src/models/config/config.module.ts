import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigController } from './config.controller';
import { PrismaModule } from 'src/modules/prisma';

@Module({
  controllers: [ConfigController],
  imports: [PrismaModule],
  providers: [ConfigService],
})
export class ConfigModule {}
