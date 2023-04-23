import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/modules/prisma';
import { TypesController } from './types.controller';
import { TypesService } from './types.service';

@Module({
  controllers: [TypesController],
  imports: [PrismaModule],
  providers: [TypesService],
})
export class TypesModule {}
