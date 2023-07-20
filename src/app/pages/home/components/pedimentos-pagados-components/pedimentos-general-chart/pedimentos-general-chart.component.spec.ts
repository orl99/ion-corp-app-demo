import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedimentossGeneralChartComponent } from './pedimentos-general-chart.component';

describe('PedimentossGeneralChartComponent', () => {
  let component: PedimentossGeneralChartComponent;
  let fixture: ComponentFixture<PedimentossGeneralChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedimentossGeneralChartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedimentossGeneralChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
