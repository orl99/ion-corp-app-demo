import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DireccionGeneralPage } from './direccion-general.page';

describe('DireccionGeneralPage', () => {
  let component: DireccionGeneralPage;
  let fixture: ComponentFixture<DireccionGeneralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireccionGeneralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DireccionGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
