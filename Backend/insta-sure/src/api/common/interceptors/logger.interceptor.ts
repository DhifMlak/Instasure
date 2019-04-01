import { ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable()
export class LoggerInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, call$: Observable<any>): Observable<any> {
        const now = Date.now();
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:no-console
        return call$.pipe(tap(() => { console.log(`${context.getArgs()[0].method} - ${context.getArgs()[0].originalUrl} ${Date.now() - now}ms`); }));
    }
}