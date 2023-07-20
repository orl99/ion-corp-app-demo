import { HomeService } from './services/home.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

//import { HttpClientModule } from '@angular/common/http';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

// import { Ng } from '@angular/forms';


// components
import { CrucesCardComponent } from './components/cruces-component/cruces-card/cruces-card.component';
import { CrucesChartComponent } from './components/cruces-component/cruces-chart/cruces-chart.component';
import { CrucesTableComponent } from './components/cruces-component/cruces-table/cruces-table.component';
import { CrucesGeneralChartComponent } from './components/cruces-component/cruces-general-chart/cruces-general-chart.component';

import { PedimentosCardComponent } from './components/pedimentos-pagados-components/pedimentos-card/pedimentos-card.component';
import { PedimentosChartComponent } from './components/pedimentos-pagados-components/pedimentos-chart/pedimentos-chart.component';
import { PedimentossGeneralChartComponent } from './components/pedimentos-pagados-components/pedimentos-general-chart/pedimentos-general-chart.component';
import { PedimentosTableComponent } from './components/pedimentos-pagados-components/pedimentos-table/pedimentos-table.component';

// Shared module
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { ChartsModule } from 'ng2-charts';

// Services
import { HomeApiService } from './api/home-api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTabsModule,
    ChartsModule,
    MatTableModule,
    //HttpClientModule,
    MatIconModule
  ],
  declarations: [
    HomePage,
    CrucesCardComponent,
    CrucesChartComponent,
    CrucesTableComponent,
    CrucesGeneralChartComponent,
    PedimentosCardComponent,
    PedimentosChartComponent,
    PedimentossGeneralChartComponent,
    PedimentosTableComponent,
  ],
  providers: [HomeApiService, HomeService]
})
export class HomePageModule {}
