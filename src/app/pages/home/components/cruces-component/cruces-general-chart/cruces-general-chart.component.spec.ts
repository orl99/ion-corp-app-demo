import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrucesGeneralChartComponent } from './cruces-general-chart.component';

describe('CrucesGeneralChartComponent', () => {
  let component: CrucesGeneralChartComponent;
  let fixture: ComponentFixture<CrucesGeneralChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrucesGeneralChartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrucesGeneralChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
