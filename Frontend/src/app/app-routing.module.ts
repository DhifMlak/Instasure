import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadReportComponent } from './upload-report/upload-report.component';
import { CsvComponent } from './csv/csv.component';
import { ReportFormComponent } from './report-form/report-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'csv', component: CsvComponent },
  { path: 'upload', component: UploadReportComponent },
  { path: 'reportform', component: ReportFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
