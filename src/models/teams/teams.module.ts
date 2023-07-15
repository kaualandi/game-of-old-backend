import { Module } from '@nestjs/common';
import { S3Module } from 'src/modules/aws/s3/s3.module';
import { PrismaModule } from 'src/modules/prisma';
import { ImagesService } from '../images/images.service';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';

@Module({
  controllers: [TeamsController],
  imports: [PrismaModule, S3Module],
  providers: [TeamsService, ImagesService],
})
export class TeamsModule {}
