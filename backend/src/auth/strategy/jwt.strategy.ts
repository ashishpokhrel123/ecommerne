import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserRepository } from '../../user/respository/userRepository';
import { JwtPayload } from '../../interface/jwt-payload.interface';
import { User } from '../../user/schema/user.schema';
import { AuthService } from '../service/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
       ignoreExpiration: false,
      secretOrKey: 'secret'
    });
  }

  async validate(payload: any) {
    return { id: payload.id};
  }
}
