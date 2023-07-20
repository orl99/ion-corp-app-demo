import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BmascTableComponent } from './bmasc-table.component';

describe('BmascTableComponent', () => {
  let component: BmascTableComponent;
  let fixture: ComponentFixture<BmascTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmascTableComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BmascTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
