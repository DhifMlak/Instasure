import { Controller, Post, Body, Get, UseGuards, Param, UseInterceptors, Res, FileInterceptor, UploadedFile } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
// import { AuthGuard } from '../common/passport/auth.guard';
import { LoggerInterceptor } from '../common/interceptors/logger.interceptor';
import { JwtStrategy } from '../common/strategy/jwt.strategy';
// import * as multer from 'multer';
// import { AuthGuardCheck } from '../common/passport/auth.guard.check';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Post('login')
    async login(@Body() user: User) {
        return this.usersService.findUser(user);
    }

    @Post('register')
    async register(@Body() user: User) {
        return this.usersService.create(user);
    }

}
