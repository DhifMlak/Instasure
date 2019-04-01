import { Controller, Post, UseInterceptors, FileInterceptor, Res, UploadedFile, Param } from '@nestjs/common';
import * as multer from 'multer';
import * as path from 'path';
import { spawn } from 'child_process';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ReportsService } from './reports.service';
@Controller('reports')
export class ReportsController {
    constructor(private reportsService: ReportsService) {

    }

    @Post('new')
    @UseInterceptors(FileInterceptor('file', {
        storage: multer.diskStorage({
            destination(req, file, cb) {
                cb(null, './uploads/reports/');
            },
            filename(req, file, cb) {
                cb(null, file.originalname + 'AA');
            },
        }),

    }))
    async uploadCVProfile(@Res() res, @UploadedFile() file): Promise<any> {
        this.reportsService.uploadReport(`${file.filename}`);

        await res.json(file);

    }

    @Post('test')
    async testPython(@Res() res ) {

        const pyProg = spawn('python', ['./scripts/script.py']);

        pyProg.stdout.on('data',  (data) => {
            // tslint:disable-next-line:no-console
            console.log(data.toString());
            res.write(data);
            res.end('end');
        });

    }

}
