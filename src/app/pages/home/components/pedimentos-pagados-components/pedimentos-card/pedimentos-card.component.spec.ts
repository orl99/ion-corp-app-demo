import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedimentosCardComponent } from './pedimentos-card.component';

describe('PedimentosCardComponent', () => {
  let component: PedimentosCardComponent;
  let fixture: ComponentFixture<PedimentosCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedimentosCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedimentosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
