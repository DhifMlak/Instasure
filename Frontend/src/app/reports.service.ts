import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  createReport(value: any): any {
    return this.http.post(`http://localhost:3000/reports/create`, value);  }
  constructor(private http: HttpClient) { }

  uploadReport(file) {
    return this.http.post(`http://localhost:3000/reports/new`, file);
  }

  getSinistreCount(): any {
    return this.http.get('http://localhost:3000/sinistre/count');
  }
  getSinistreByYear(year): any {
    return this.http.get('http://localhost:3000/sinistre/year/' + year);
  }

}
