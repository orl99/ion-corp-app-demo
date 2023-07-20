import { DataForChartsI } from './../../../models/data-for-charts.interface';
import { AllCrucesI } from './../../../../../models/all-cruces.interface';
import { Component, OnInit, Input } from '@angular/core';
import { CrucesGeneralTableI } from './../../../models/CrucesGeneralTable.model';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'home-cruces-general-table',
  templateUrl: './cruces-table.component.html',
  styleUrls: ['./cruces-table.component.scss'],
})
export class CrucesTableComponent implements OnInit {

  @Input()InDataTable: DataForChartsI[];

  public tableColums = ['unida_negocio', 'ENERO', 'FEBRERO', 'MARZO',	'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE', 'TOTALES',	'PARTICIPACION'];
  public dataSource: any;


  constructor() { }

  ngOnInit() {
    console.log('InDataTable', this.InDataTable);
    this.dataSource = this.addAllValues(this.InDataTable);
  }

  public addAllValues(chartData: DataForChartsI[]){
    const newDataSet = chartData.map( dataSet => {
      const allData = dataSet.data;
      let numbersAdded = 0;
      allData.forEach((n) => {
        numbersAdded += n;
      });
      dataSet['total'] = numbersAdded;
      return dataSet;
    });
    console.log('newDataSet', newDataSet);
    return newDataSet;
  }

}
