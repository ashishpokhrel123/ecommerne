import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/module/user.module';

import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseConfigService } from 'lib/config/database-config.service';;
import { UserRepository } from './user/respository/userRepository';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(databaseConfigService.getMongoUri()),
    UserModule,
    AuthModule,
   
   
    
  ],
  controllers: [AppController],
  providers: [AppService],
 
})
export class AppModule {}
