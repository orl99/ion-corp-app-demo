import { HomeService } from './../../../services/home.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';

enum infoChartTypes {
  GENERAL = 'GENERAL',
  MONTHLY = 'MONTHLY',
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'home-cruces-card-component',
  templateUrl: './cruces-card.component.html',
  styleUrls: ['./cruces-card.component.scss'],
})
export class CrucesCardComponent implements OnInit {

  // Todo make years and months services from back-end
  // Mocks
  selectMonths = [
    { month: 'Enero', monthNum: '01' },
    { month: 'Febrero', monthNum: '02' },
    { month: 'Marzo', monthNum: '03' },
    { month: 'Abril', monthNum: '04' },
    { month: 'Mayo', monthNum: '05' },
    { month: 'Junio', monthNum: '06' },
    { month: 'Julio', monthNum: '07' },
    { month: 'Agosto', monthNum: '08' },
    { month: 'Septiembre', monthNum: '09' },
    { month: 'Octubre', monthNum: '10' },
    { month: 'Noviembre', monthNum: '11' },
    { month: 'Diciembre', monthNum: '12' },
  ];
  // TODO: Make this dinamic from API
  selectYears = ['2018', '2019', '2020'];

  chartLabelsData = ['Ene', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  chartGeneralData: ChartDataSets[];

  public infoChartType = '0';

  public selectedYear: string;
  public selectedMonths: string;
  public chartDataPerDate: ChartDataSets[];
  public chartDataPerDateIsAvailable = false;

  constructor(private homeService: HomeService) { }

  async ngOnInit() {
    const crucesData = await this.homeService.getCruces();
    console.log('crucesData', crucesData);
    this.chartGeneralData = crucesData;
  }

  /**
   * changeChartInfoType
   */
  public changeChartInfoType(type: string) {
    this.infoChartType = type;
  }

  public async getCrucesByDate(formValues: any) {
    console.log('fv', formValues);
    const { selectedMonths, selectedYear } = formValues;
    const response = await this.homeService.getCrucesByDate(selectedYear, selectedMonths);
    console.log('response', response);
    if (!!response) {
      this.chartDataPerDateIsAvailable = true;
      this.chartDataPerDate = [...response];
    } else {
      this.chartDataPerDateIsAvailable = false;
    }
  }

}
