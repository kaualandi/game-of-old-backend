import { MiddlewareConsumer, Module } from '@nestjs/common';
import { LoggerMiddleware } from 'src/common/middleware/models/logger/logger.middleware';
import { S3Module } from 'src/modules/aws/s3/s3.module';
import { PrismaModule } from 'src/modules/prisma';
import { VariationsController } from './variations.controller';
import { VariationsService } from './variations.service';

@Module({
  controllers: [VariationsController],
  imports: [S3Module, PrismaModule],
  providers: [VariationsService],
})
export class VariationsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(VariationsController);
  }
}
