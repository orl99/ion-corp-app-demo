import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// Modules
import { ChartsModule } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';

// Components
import { HeaderComponent } from './components/layout/bmasc-header/header.component';
import { BmascMainChartComponent } from './components/charts/bmasc-main-chart/bmasc-main-chart.component';
// EXPORTS
const exportComponents = [
   HeaderComponent,
   BmascMainChartComponent
];
@NgModule({
  declarations: [
    ...exportComponents
  ],
  imports: [
    CommonModule,
    IonicModule,
    ChartsModule,
    MatTableModule
  ],
  exports: [
    ...exportComponents
  ]
})
export class SharedModule { }
