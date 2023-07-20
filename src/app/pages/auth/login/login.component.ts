import { AuthCredentialsI } from './../models/auth-credentials.interface';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface LoginModelI {
  userInput: string;
  passwordInput: string;
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private loginService: LoginService) {}

  // Input model
  loginModel = {
    userInput: '',
    passwordInput: ''
  };

  loginMesaage: string;
  loginProblemsFlag: boolean;

  async ngOnInit() {
  }

  public async onLogIn(formsValue: LoginModelI) {
    this.loginProblemsFlag = false;
    const userDTO: AuthCredentialsI = {
      email: formsValue.userInput,
      password: formsValue.passwordInput
    };
    const userSingIn = await this.loginService.signIn(userDTO);

    if (!userSingIn.status) {
      this.loginMesaage = userSingIn.message;
      this.loginProblemsFlag = true;
      console.log('user credentials are not correct', userSingIn);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
