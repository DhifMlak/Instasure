import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { JwtStrategy } from 'api/common/strategy/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy],
})
export class UsersModule { }
