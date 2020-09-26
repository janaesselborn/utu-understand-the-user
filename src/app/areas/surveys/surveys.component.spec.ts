import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SurveysComponent } from './surveys.component';

describe('SurveysComponent', () => {
  let component: SurveysComponent;
  let fixture: ComponentFixture<SurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveysComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
