import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './models/auth/auth.module';
import { CategorysModule } from './models/categorys/categorys.module';
import { ImagesModule } from './models/images/images.module';
import { OrdersModule } from './models/orders/orders.module';
import { ProductsModule } from './models/products/products.module';
import { UsersModule } from './models/users/users.module';
import { VariantsModule } from './models/variants/variants.module';
import { S3Module } from './modules/aws/s3/s3.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Global()
@Module({
  controllers: [AppController],
  imports: [
    PrismaModule,
    VariantsModule,
    S3Module,
    ImagesModule,
    CategorysModule,
    ProductsModule,
    AuthModule,
    UsersModule,
    OrdersModule,
  ],
  providers: [AppService],
})
export class AppModule {}
