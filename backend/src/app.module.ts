import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/module/user.module';

import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseConfigService } from 'lib/config/database-config.service';;
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guard/RolesGuard';
import { CategoryModule } from './category/module/category.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(databaseConfigService.getMongoUri()),
    UserModule,
    AuthModule,
    CategoryModule
   
   
    
  ],
  controllers: [AppController],
  providers: [AppService, {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },],
 
})
export class AppModule {}
