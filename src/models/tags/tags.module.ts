import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { PrismaModule } from 'src/modules/prisma';

@Module({
  controllers: [TagsController],
  imports: [PrismaModule],
  providers: [TagsService],
})
export class TagsModule {}
