import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomModule } from './modules/room/room.module';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from './modules/auth/auth.module';

@Global()
@Module({
  controllers: [AppController],
  imports: [RoomModule, HttpModule, AuthModule],
  providers: [AppService],
})
export class AppModule {}
