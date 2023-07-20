import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BmascMainChartComponent } from './bmasc-main-chart.component';

describe('BmascMainChartComponent', () => {
  let component: BmascMainChartComponent;
  let fixture: ComponentFixture<BmascMainChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmascMainChartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BmascMainChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
