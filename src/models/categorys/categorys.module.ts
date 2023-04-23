import { Module } from '@nestjs/common';
import { CategorysService } from './categorys.service';
import { CategorysController } from './categorys.controller';
import { PrismaModule } from 'src/modules/prisma';

@Module({
  controllers: [CategorysController],
  imports: [PrismaModule],
  providers: [CategorysService],
})
export class CategorysModule {}
