import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar/ngx';



const THEME_KEY = 'selected-app-theme';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  darkMode: boolean;

  constructor(private plat: Platform,
              private storage: Storage,
              private statusBar: StatusBar) {
    this.plat.ready().then(() => {
      this.storage.get(THEME_KEY).then( theme => {
        console.log('Default Theme', theme);
        if (!!theme) {
          this.setAppTheme(theme);
        }
      });
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      // Prefers Dark mode
      // prefersDark.addListener(e => {
      //   console.log('Dark Mode', e);
      //   this.setAppTheme(e.matches);
      // });
      // TODO: SET IT OPTIONAL
      this.setAppTheme(true);
    });
  }

  public getDarkModeStatus(): boolean {
    return this.darkMode;
  }

  /**
   * toggeAppTheme
   */
  public toggeAppTheme() {
    this.darkMode = !this.darkMode;
    this.setAppTheme(this.darkMode);
  }

  /**
   * setAppTheme
   * This method will get the boolean @param dark in other to decide if the dark mode will be
   * implemented or not
   */
  public setAppTheme(dark: boolean) {
      this.darkMode = dark;
      this.storage.set(THEME_KEY, this.darkMode);
      if (this.darkMode) {
        console.log('dartk mode exp');
        document.body.classList.add('dark');
        console.log('Dark mode active');
        this.statusBar.styleBlackOpaque();
        this.statusBar.backgroundColorByHexString('#000000');
      } else {
        document.body.classList.remove('dark');
        console.log('Dark mode disactive;');
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
      }
  }
}
