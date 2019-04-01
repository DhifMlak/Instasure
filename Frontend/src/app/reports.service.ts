import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  constructor(private http: HttpClient) {}

  uploadReport(file) {
    return this.http.post(`http://localhost:3000/reports/new`, file);
  }

}
