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

  onSubmit() {
    this.authService.login(
      this.loginForm.get('login').value,
      this.loginForm.get('password').value
    );
  }
}
