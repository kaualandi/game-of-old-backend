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
import { CouponsModule } from './models/coupons/coupons.module';
import { CartModule } from './models/cart/cart.module';
import { TeamsModule } from './models/teams/teams.module';
import { FiltersModule } from './models/filters/filters.module';
import { ConfigModule } from './models/config/config.module';
import { TagsModule } from './models/tags/tags.module';
import { BannersModule } from './models/banners/banners.module';
import { ArticlesModule } from './models/articles/articles.module';
import { HomeModule } from './models/home/home.module';
import { SectionsModule } from './models/sections/sections.module';
import { AddressModule } from './models/address/address.module';

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
    CouponsModule,
    CartModule,
    TeamsModule,
    FiltersModule,
    ConfigModule,
    TagsModule,
    BannersModule,
    ArticlesModule,
    HomeModule,
    SectionsModule,
    AddressModule,
  ],
  providers: [AppService],
})
export class AppModule {}
