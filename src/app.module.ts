import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { RoomModule } from './modules/room/room.module';

@Global()
@Module({
  controllers: [AppController],
  imports: [
    RoomModule,
    HttpModule,
    AuthModule,
    JwtModule.register({
      secret: process.env.SECRET_USER,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
