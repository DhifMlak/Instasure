import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Reports } from './interfaces/reports.interface';
import * as XLSX from 'xlsx';
@Injectable()
export class ReportsService {
    createReport(report): any {
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([report]);

        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        /* save to file */
        XLSX.writeFile(wb, 'SheetJS.xlsx');    }

    constructor(@InjectModel('Reports') private readonly reportsModel: Model<Reports>) {

    }
    async uploadReport(file) {

        return await this.reportsModel.create({reportFile: file}).catch(err => err);
    }


}
