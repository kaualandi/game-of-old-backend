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
      secret: 'ebd1b76961d7d38aca2bd7b141f9a163',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
