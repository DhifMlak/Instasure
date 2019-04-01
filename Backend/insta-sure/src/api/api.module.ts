import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';
import { ReportsModule } from './reports/reports.module';
@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost:27017/instasure'), UsersModule, CommonModule, ReportsModule],
    controllers: [],
    providers: [],
})
export class ApiModule {}
