import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'home-pedimentos-general-chart',
  templateUrl: './pedimentos-general-chart.component.html',
  styleUrls: ['./pedimentos-general-chart.component.scss'],
})
export class PedimentossGeneralChartComponent implements OnInit, AfterViewInit {
  @Input() InChartData: ChartDataSets[] = [];
  @Input() InChartType: ChartType;
  @Input() InLegend: boolean;
  @Input() InColors: Color[];
  @Input() InOptions: (ChartOptions & { annotation: any });
  @Input() InLabels: Label[];
  @Input() customHeight: any;
  @Input() customWidth: any;

  // Dom Charts
  @ViewChild('DomCanvas', {static: false}) canvas: ElementRef;

  // Chart options and data
  public chartData: ChartDataSets[];
  public chartType: ChartType;
  public legend: boolean;
  public colors: Color[];
  public labels: Label[];
  public options: (ChartOptions);

  constructor() {
    this.options = {
      responsive: true,
      legend: {
        display: true,
        align: 'start',
        position: 'top',
        fullWidth: true
      },
      scales: {
        xAxes: [{
          display: false,
          offset: true,
          ticks: {
            min: 0,
          }
        }],
        yAxes: [{
          display: true,
          ticks: {
            min: 0,
          }
        }],
      }
    };
  }

  ngOnInit() {
    this.chartData = this.InChartData;
    console.log('general Charts', this.InChartData);
    this.chartType = this.InChartType;
    this.legend = this.InLegend;
    this.colors = this.InColors;
    // this.options = this.InPptions;
    this.labels = this.InLabels;
    console.log(this.InLabels);
  }

  ngAfterViewInit() {
    const domCanvasAccess = this.canvas.nativeElement as HTMLCanvasElement;
    const height = this.canvas.nativeElement as HTMLCanvasElement;
    height.height = 500;
    const width = window.innerWidth || document.body.clientWidth;
  }

}
