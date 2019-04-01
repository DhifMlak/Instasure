import * as passport from 'passport';
import {
    CanActivate,
    ExecutionContext,
    mixin,
    UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const defaultOptions = {
    session: false,
    property: 'user',
};

export function AuthGuardCheck(type, role: string[] = [''], options: any = defaultOptions) {
    options = { ...defaultOptions, ...options };
    const guard = mixin(
        class implements CanActivate {
            constructor(private reflector: Reflector) { }
            async canActivate(context: ExecutionContext): Promise<boolean> {
                const httpContext = context.switchToHttp();
                const [request, response] = [
                    httpContext.getRequest(),
                    httpContext.getResponse(),
                ];
                request[
                    options.property || defaultOptions.property
                ] = await new Promise((resolve, reject) =>
                    passport.authenticate(type, options, (err, user, info) => {

                        if (err || !user) {
                            return reject(err || new UnauthorizedException());
                        }
                        if (request.params.idUser.toString() !== user._id.toString()) {
                            // tslint:disable-next-line:no-console
                            console.log(request.params.idUser, user._id);
                            return reject(err || new UnauthorizedException());
                        }
                        // tslint:disable-next-line:no-console
                        console.log(request.params.idUser, user._id, 'hey');
                        resolve(user);
                    })(request, response, resolve),
                );
                return true;
            }
        },
    );
    return guard;
}
