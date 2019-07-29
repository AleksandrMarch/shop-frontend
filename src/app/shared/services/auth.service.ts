import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {ENDPOINTS} from '../../core/endpoints';

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
    this.http.post(ENDPOINTS.login, {login: loginStr, password: passwordStr})
      .subscribe((response: LoginResponse) => {
        console.log(response);
      });
  }
}
