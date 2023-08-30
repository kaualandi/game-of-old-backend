import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { S3Module } from 'src/modules/aws/s3/s3.module';
import { PrismaModule } from 'src/modules/prisma';
import { S3Service } from 'src/modules/aws/s3/s3.service';

@Module({
  controllers: [ArticlesController],
  imports: [S3Module, PrismaModule],
  providers: [ArticlesService, S3Service],
})
export class ArticlesModule {}
