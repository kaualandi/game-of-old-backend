import { PrismaModule } from './../../modules/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';

@Module({
  controllers: [ContactController],
  imports: [PrismaModule],
  providers: [ContactService],
})
export class ContactModule {}
