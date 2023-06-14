import { Module } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserController } from '../controller/user.controller';
import { UserRepository } from '../respository/userRepository';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/strategy/jwt.strategy';
import { JwtAuthGuard } from 'src/guard/JwtAuthGuard';
import { AuthService } from 'src/auth/service/auth.service';
import { User, userSchema } from '../schema/user.schema';

@Module({
  imports: [
     MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
    PassportModule,
    JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1h' } }),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository, JwtStrategy, JwtAuthGuard, AuthService],
  exports: [AuthService],
})
export class UserModule {}
