import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { UserModel, userSchema } from 'src/user/schema/user.schema';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UserRepository } from 'src/user/respository/userRepository';
import { UserController } from 'src/user/controller/user.controller';
import { UserService } from 'src/user/service/user.service';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { JwtAuthGuard } from 'src/guard/JwtAuthGuard';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1h' } }),
   
  ],
  controllers: [UserController, AuthController],
  providers: [UserService, JwtStrategy, UserRepository, AuthService, JwtAuthGuard],
  exports: [AuthService, UserRepository],
})
export class AuthModule {}
