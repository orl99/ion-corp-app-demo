import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedimentosChartComponent } from './pedimentos-chart.component';

describe('PedimentosChartComponent', () => {
  let component: PedimentosChartComponent;
  let fixture: ComponentFixture<PedimentosChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedimentosChartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedimentosChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
