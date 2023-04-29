import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { VariationsModule } from './models/variations/variations.module';
import { S3Module } from './modules/aws/s3/s3.module';
import { TypesModule } from './models/types/types.module';
import { ImagesModule } from './models/images/images.module';
import { MeasuresModule } from './models/measures/measures.module';
import { CategorysModule } from './models/categorys/categorys.module';
import { ProductsModule } from './models/products/products.module';
import { AuthModule } from './models/auth/auth.module';
import { UsersModule } from './models/users/users.module';

@Global()
@Module({
  controllers: [AppController],
  imports: [PrismaModule, VariationsModule, S3Module, TypesModule, ImagesModule, MeasuresModule, CategorysModule, ProductsModule, AuthModule, UsersModule],
  providers: [AppService],
})
export class AppModule {}
