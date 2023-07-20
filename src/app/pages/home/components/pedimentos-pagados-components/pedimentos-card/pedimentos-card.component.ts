import { HomeService } from './../../../services/home.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';

enum infoChartTypes {
  GENERAL = 'GENERAL',
  MONTHLY = 'MONTHLY',
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'home-pedimentos-card-component',
  templateUrl: './pedimentos-card.component.html',
  styleUrls: ['./pedimentos-card.component.scss'],
})
export class PedimentosCardComponent implements OnInit {

  // chart-mensual
  chartMensualEneroData: ChartDataSets[] = [
    {data: [232], label: 'Manzanillo'},
    {data: [473], label: 'Matamoros'},
    {data: [797], label: 'Nuevo Laredo'},
    {data: [49], label: 'Piedras Negras'},
    {data: [104], label: 'Veracruz'},
    {data: [276], label: 'AICM'},
    {data: [49], label: 'Guadalajara'},
    {data: [88], label: 'Altamira'},
  ];
  tableGeneralData = [
    {
      facility: 'Manzanillo',
      ene: 232,
      feb: 168,
      mar: 179,
      abr: 202,
      may: 199,
      jun: 199,
      jul: 9,
      ago: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dic: 0,
      total: 1188,
      particpation: 10.9,
    },
    {
      facility: 'Matamoros',
      ene: 473,
      feb: 462,
      mar: 566,
      abr: 431,
      may: 379,
      jun: 347,
      jul: 33,
      ago: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dic: 0,
      total: 2691,
      particpation: 22.85,
    },
    {
      facility: 'Nuevo Laredo',
      ene: 797,
      feb: 848,
      mar: 804,
      abr: 396,
      may: 355,
      jun: 709,
      jul: 56,
      ago: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dic: 0,
      total: 3965,
      particpation: 33.67,
    },
    {
      facility: 'Piedras Negras',
      ene: 49,
      feb: 110,
      mar: 179,
      abr: 340,
      may: 269,
      jun: 298,
      jul: 23,
      ago: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dic: 0,
      total: 1268,
      particpation: 10.77,
    },
    {
      facility: 'Veracruz',
      ene: 104,
      feb: 88,
      mar: 127,
      abr: 120,
      may: 131,
      jun: 75,
      jul: 12,
      ago: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dic: 0,
      total: 657,
      particpation: 5.58,
    },
    {
      facility: 'AICM',
      ene: 276,
      feb: 304,
      mar: 336,
      abr: 156,
      may: 86,
      jun: 130,
      jul: 12,
      ago: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dic: 0,
      total: 1300,
      particpation: 11.04,
    },
    {
      facility: 'Guadalajara',
      ene: 49,
      feb: 56,
      mar: 62,
      abr: 50,
      may: 23,
      jun: 56,
      jul: 7,
      ago: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dic: 0,
      total: 303,
      particpation: 2.57,
    },
    {
      facility: 'Altamira',
      ene: 88,
      feb: 70,
      mar: 96,
      abr: 69,
      may: 31,
      jun: 46,
      jul: 3,
      ago: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dic: 0,
      total: 403,
      particpation: 3.42,
    },
  ];
  chartLabelsData = ['Ene', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  chartGeneralData: ChartDataSets[] = [];

  /*
  *  ngModels
  */
  public selectedYear: string;
  public selectedMonths: string;

  // Catalogs
  // TODO: Make this dinamic from API
  selectYears = ['2018', '2019', '2020'];
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

  public infoChartType = '0';
  public chartDataPerDateIsAvailable = false;
  public chartDataPerDate: ChartDataSets[];

  // chartMensualEneroLabel = [
  //   'MANZANILLO',
  //   'MATAMOROS',
  //   'NUEVO LAREDO',
  //   'PIEDRAS NEGRAS',
  //   'VERACRUZ',
  //   'AICM',
  //   'GUADALAJARA',
  //   'ALTAMIRA',
  // ];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getPedimentosPagados();
  }

  public async getPedimentosPagados() {
    const getApiPP = await this.homeService.getPedimentosPagados();
    console.log('API GETPP', getApiPP);
    if (!!getApiPP) {
      this.chartGeneralData = getApiPP;
    }
  }

  public async getPPByDate(formValues: any) {
    console.log('fv', formValues);
    const { selectedMonths, selectedYear } = formValues;
    const response = await this.homeService.getPPByDate(selectedYear, selectedMonths);
    console.log('response', response);
    if (!!response) {
      this.chartDataPerDateIsAvailable = true;
      this.chartDataPerDate = [...response];
    } else {
      this.chartDataPerDateIsAvailable = false;
    }
  }

  /**
   * changeChartInfoType
   */
  public changeChartInfoType(type: string) {
    this.infoChartType = type;
  }

}
