import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KnowHowComponent } from './know-how.component';

describe('KnowHowComponent', () => {
  let component: KnowHowComponent;
  let fixture: ComponentFixture<KnowHowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowHowComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KnowHowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
