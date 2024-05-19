import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CandidatureService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  create(data: any): Observable<any> {
    return this.http.post(`${this.apiURL}/candidatures`, data);
  }

  accept(id: any): Observable<any> {
    return this.http.put(`${this.apiURL}/candidatures/${id}/accept`, {});
  }

  reject(id: any): Observable<any> {
    return this.http.put(`${this.apiURL}/candidatures/${id}/reject`, {});
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.apiURL}/candidatures`);
  }

  accepted(): Observable<any> {
    return this.http.get(`${this.apiURL}/candidatures/accepted`);
  }
  acceptedById(id: any): Observable<any> {
    return this.http.get(`${this.apiURL}/candidatures/accepted/${id}`);
  }
}
