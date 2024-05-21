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

  create(data: any) {
    return this.http.post(`${this.apiURL}/candidatures`, data);
  }

  accept(id: any) {
    return this.http.put(`${this.apiURL}/candidatures/${id}/accept`, {});
  }

  reject(id: any) {
    return this.http.put(`${this.apiURL}/candidatures/${id}/reject`, {});
  }

  getAll() {
    return this.http.get(`${this.apiURL}/candidatures`);
  }

  accepted() {
    return this.http.get(`${this.apiURL}/candidatures/accepted`);
  }
  acceptedById(id: any) {
    return this.http.get(`${this.apiURL}/candidatures/accepted/${id}`);
  }
  acceptById(id: any) {
    return this.http.get(`${this.apiURL}/candidatures/${id}`);
  }
}