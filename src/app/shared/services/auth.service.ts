import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {ENDPOINTS} from '../../core/endpoints';
import {HttpHeaders} from '@angular/common/http';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpService
  ) {}

  login(loginStr: string, passwordStr: string) {

    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(loginStr + ':' + passwordStr),
    });

    this.http.post(ENDPOINTS.login, {}, headers)
      .subscribe((response: LoginResponse) => {
        console.log(response);
      });
  }

  logout(): void {
    this.http.post(ENDPOINTS.logout, {})
      .subscribe((response: LoginResponse) => {
        console.log(response);
      });
  }

  register(loginStr: string, passwordStr: string): void {
    const headers = new HttpHeaders({
      'Content-type' : 'application/json',
    });

    this.http.post(ENDPOINTS.register, {username: loginStr, password: passwordStr}, headers)
      .subscribe((response: LoginResponse) => {
        console.log(response);
      });
  }
}
