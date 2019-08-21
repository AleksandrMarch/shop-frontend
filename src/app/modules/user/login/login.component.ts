import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {

  constructor(
    private authService: AuthService
  ) {}

  public loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  public registerForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmitLogin() {
    this.authService.login(
      this.loginForm.get('login').value,
      this.loginForm.get('password').value
    );
  }

  onSubmitRegister() {
    this.authService.register(
      this.registerForm.get('userName').value,
      this.registerForm.get('password').value,
    );
  }

  logout() {
    this.authService.logout();
  }
}
