import { Module } from '@nestjs/common';
import { S3Module } from 'src/modules/aws/s3/s3.module';
import { S3Service } from 'src/modules/aws/s3/s3.service';
import { PrismaModule } from 'src/modules/prisma';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  imports: [PrismaModule, S3Module],
  providers: [UsersService, S3Service],
  exports: [UsersService],
})
export class UsersModule {}
