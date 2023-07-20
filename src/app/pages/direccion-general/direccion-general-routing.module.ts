import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DireccionGeneralPage } from './direccion-general.page';

const routes: Routes = [
  {
    path: '',
    component: DireccionGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DireccionGeneralPageRoutingModule {}
