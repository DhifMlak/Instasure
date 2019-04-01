import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  constructor(private http: HttpClient) {}

  uploadReport(file) {
    //const headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');
    return this.http.post(`http://localhost:3000/reports/new`, file);
  }

}
