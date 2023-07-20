import { Router } from '@angular/router';
import { LoginService } from './login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  activeLoginPage = false;

  constructor(private loginService: LoginService,
              private router: Router) {}

  async ngOnInit() {
    await this.isAuth();
  }

  private async isAuth(): Promise<void>{
    const isUserAuthedWithToken = await this.loginService.isAuth();
    console.log('isUserAuthedWithToken', isUserAuthedWithToken);
    if (isUserAuthedWithToken) {
      this.router.navigate(['/home']);
    } else {
      this.activeLoginPage = true;
    }
  }

}
