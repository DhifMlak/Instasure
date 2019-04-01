import * as passport from 'passport';
import { Type } from '@nestjs/common/interfaces';
import { Strategy } from 'passport-jwt';

export abstract class AbstractStrategy {
  abstract validate(...args: any[]): any;
}

export function PassportStrategy<T extends Type<any> = any>(
  // tslint:disable-next-line:no-shadowed-variable
  Strategy: T,
): Type<AbstractStrategy> {
  abstract class MixinStrategy extends Strategy {
    abstract validate(...args: any[]): any;
    constructor(...args: any[]) {
      super(...args, (...params: any[]) => this.validate(...params));
      passport.use(this as Strategy);
    }
  }
  return MixinStrategy;
}
