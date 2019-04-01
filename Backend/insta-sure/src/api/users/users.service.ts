import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async findAll(): Promise<User[]> {
        return await this.userModel.find();
    }
    async create(user: User): Promise<User> {
        return this.userModel.create(user).catch(err => err);
      }
    async findOne(id): Promise<User> {
        return await this.userModel.findById({ _id: id });
    }

    async findUser(user: User): Promise<any> {
        const res = await this.userModel.findOne({ email: user.email }).exec();
        if (!res) {
            return { message: 'User not found' };
        }
        const res2 = await res.comparePassword(user.password, res.password);
        // const res = await user.comparePassword(user.password);
        if (!res2) {
            return { message: 'Wrong Password' };
        }
        if (res.userStatus === 'Not Approved') {
            return { message: 'Not Approved' };
        }
        return this.createToken(res);
    }

    async createToken(user: User) {
        const expiresIn = 3600;
        user.password = null;
        return {
            message: 'OK',
            accessToken: jwt.sign({ data: user, exp: Math.floor(Date.now() / 1000) + (3600 * 24) }, 'secretKeeey'),
        };
    }

    async validateUser(payload: any): Promise<any> {
        return await this.userModel.findOne({ email: payload.data.email, pass: payload.data.pass }).exec();
    }
}
