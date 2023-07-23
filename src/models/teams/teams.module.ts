import { Module } from '@nestjs/common';
import { S3Module } from 'src/modules/aws/s3/s3.module';
import { PrismaModule } from 'src/modules/prisma';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { S3Service } from 'src/modules/aws/s3/s3.service';

@Module({
  controllers: [TeamsController],
  imports: [PrismaModule, S3Module],
  providers: [TeamsService, S3Service],
})
export class TeamsModule {}
