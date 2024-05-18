import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as  moment from 'moment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient, private router: Router) {}

  login(data: any) {
    this.http.post(`${this.apiURL}/auth/login`, data).subscribe(
      (res: any) => {
        if (res && res.token) {
          // Vérification de la présence du token dans la réponse
          this.setSession(res?.token);
          const helper = new JwtHelperService();
          const decodedToken = helper.decodeToken(res?.token);
          console.log(decodedToken);
          this.router.navigateByUrl('/dashboard');
          alert('merci de votre connexion');
        } else {
          alert('Une erreur est survenue lors de la connexion');
        }
      },
      (err) => {
        alert('verifier votre données !!');
      }
    );
  }

  register(data: any) {
    return this.http.post(`${this.apiURL}/auth/register`, data);
  }

  logOut() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('idUser');
    sessionStorage.removeItem('expires_at');
    this.router.navigateByUrl('/login');
  }

  public isLoggedIn() {
    if (this.getExpiration()) {
      return moment(this.getExpiration()).isBefore();
    } else {
      return false;
    }
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = sessionStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration!);
    return moment(expiresAt);
  }
  getUserId() {
    let token = sessionStorage.getItem('token') || '';
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    console.log(decodedToken);
    return decodedToken?.id;
  }
  getRole() {
    let token = sessionStorage.getItem('token') || '';
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    console.log(decodedToken, token);
    return decodedToken.role;
  }
  forgotPassword(email: string): Observable<void> {
    return this.http.post<void>(`${this.apiURL}/auth/forgotPassword`, {
      email,
    });
  }
  resetPassword(data: any) {
    return this.http.put(
      `${this.apiURL}/auth/resetPassword/${data.token}`,
      data
    );
  }
  modifierPassword(data: any) {
    return this.http.patch(`${this.apiURL}/auth/modifierPassword`, data);
  }

  private setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    sessionStorage.setItem('token', authResult);
    sessionStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }
}
