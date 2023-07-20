import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedimentosTableComponent } from './pedimentos-table.component';

describe('PedimentosTableComponent', () => {
  let component: PedimentosTableComponent;
  let fixture: ComponentFixture<PedimentosTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedimentosTableComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedimentosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
