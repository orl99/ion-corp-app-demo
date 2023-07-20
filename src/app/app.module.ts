import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Interceptors
// import { HttpLoaderInterceptor as BMASC_INTERCEPTOR } from 'src/app/services/interceptors/httpLoaderInterceptor.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// NGXS state :P
// import { NgxsModule } from '@ngxs/store';
// import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
// // User state
// import { UserState } from './data/state/user.state';

// // Web Storage
// import {NgxWebstorageModule} from 'ngx-webstorage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    CoreModule,
    IonicModule.forRoot({mode: 'md'}),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // NgxsModule.forRoot([
    //   UserState
    // ]),
    // NgxsLoggerPluginModule.forRoot({
    //   // Do not collapse log groups
    //   // collapsed: false,
    //   // Do not log in production mode
    //   disabled: environment.production,
    // }),
    // NgxWebstorageModule.forRoot(),

  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: BMASC_INTERCEPTOR,
    //   multi: true
    // },
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    //console.log('dedefef', BMASC_INTERCEPTOR)
  }
}
