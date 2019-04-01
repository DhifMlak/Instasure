import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '../passport/passport.strategy';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../../users/interfaces/user.interface';
import { UsersService } from '../../users/users.service';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secretKeeey',
    });
  }

  // tslint:disable-next-line:ban-types
  async validate(payload: User, done: Function) {
    const user = await this.usersService.validateUser(payload);
    if (!user) {
      return done(new UnauthorizedException(), false);
    }
    done(null, user);
  }
}