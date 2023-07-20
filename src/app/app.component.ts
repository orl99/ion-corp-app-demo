import { UserService } from 'src/app/services/user.service';
import { UserSessionI } from 'src/app/models/userSession.model';
import { DeleteUserInfo } from './data/actions/user.actions';

import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// env
import { environment } from 'src/environments/environment';

// Services
import { ThemeService } from './services/theme.service';
import { Location } from '@angular/common';

// rxjs
import { filter } from 'rxjs/operators';


const TOKEN_KEY = environment.TOKEN_KEY;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Direccion General',
      url: '/direccion-general',
      icon: 'business'
    },
    {
      title: 'Sobre la app',
      url: '/folder/Outbox',
      icon: 'help'
    },
  ];

  public currentPath: string;
  public isAuthPageFlag: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private themeService: ThemeService,
    private location: Location,
    private router: Router,
    private userService: UserService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const isHome = this.location.path();
    console.warn(isHome);
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }

    this.activeCurrentRoute();
  }

  public activeCurrentRoute() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: { id: number, url: string, urlAfterRedirects: string }) => {
      console.log('event', event.url);
      this.currentPath = event.url;
      this.isAuthPage(event.url);
    });
  }

  public isAuthPage(page: string): void{
    if (page === '/auth' || page === '/') {
      this.isAuthPageFlag = true;
    } else {
      this.isAuthPageFlag = false;
    }
    console.log('page', page, 'status', this.isAuthPageFlag);
  }


  public logOutApp() {
    localStorage.removeItem(TOKEN_KEY);
    this.router.navigate(['/auth']);
    // Delete user session data
    this.userService.deleterUserData();
  }
}
