import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DireccionGeneralPageRoutingModule } from './direccion-general-routing.module';

import { DireccionGeneralPage } from './direccion-general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DireccionGeneralPageRoutingModule
  ],
  declarations: [DireccionGeneralPage]
})
export class DireccionGeneralPageModule {}
