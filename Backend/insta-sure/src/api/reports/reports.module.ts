import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { reportSchema } from './schemas/report.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Reports', schema: reportSchema }])],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
