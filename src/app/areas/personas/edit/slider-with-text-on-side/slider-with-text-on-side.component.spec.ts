import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SliderWithTextOnSideComponent } from './slider-with-text-on-side.component';

describe('SliderWithTextOnSideComponent', () => {
  let component: SliderWithTextOnSideComponent;
  let fixture: ComponentFixture<SliderWithTextOnSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderWithTextOnSideComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SliderWithTextOnSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
