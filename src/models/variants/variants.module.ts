import { MiddlewareConsumer, Module } from '@nestjs/common';
import { LoggerMiddleware } from 'src/common/middleware/models/logger/logger.middleware';
import { S3Module } from 'src/modules/aws/s3/s3.module';
import { PrismaModule } from 'src/modules/prisma';
import { VariantsController } from './variants.controller';
import { VariantsService } from './variants.service';

@Module({
  controllers: [VariantsController],
  imports: [S3Module, PrismaModule],
  providers: [VariantsService],
})
export class VariantsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(VariantsController);
  }
}
