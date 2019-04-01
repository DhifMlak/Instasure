import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Reports } from './interfaces/reports.interface';
@Injectable()
export class ReportsService {

    constructor(@InjectModel('Reports') private readonly reportsModel: Model<Reports>) {

    }
    async uploadReport(file) {

        return await this.reportsModel.create({reportFile: file}).catch(err => err);
    }


}
