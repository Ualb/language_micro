import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// others modules
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './apps/message/message.module';
import { IdiomModule } from './apps/idiom/idiom.module';
import { PlatformModule } from './apps/platform/platform.module';
import { CountryModule } from './apps/country/country.module';
import { ComponentModule } from './apps/component/component.module';
import { ViewModule } from './apps/view/view.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    MessageModule,
    IdiomModule, 
    PlatformModule, 
    CountryModule, 
    ComponentModule,
    ViewModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
