import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { AuthService } from './api/auth.service';

// Components
import { LoginComponent } from './login/login.component';

// Material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

//import { HttpClientModule } from '@angular/common/http';
// services
import { LoginService } from './login/login.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    //HttpClientModule
  ],
  declarations: [AuthPage, LoginComponent],
  providers: [AuthService, LoginService]
})
export class AuthPageModule {}
