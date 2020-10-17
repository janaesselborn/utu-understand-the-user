import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider-with-text-on-side',
  templateUrl: './slider-with-text-on-side.component.html',
  styleUrls: ['./slider-with-text-on-side.component.scss'],
})
export class SliderWithTextOnSideComponent implements OnInit {
  @Input()
  leftLabelSlider: string;

  @Input()
  rightLabelSlider: string;

  @Input()
  valueSlider: number;

  constructor() { }

  ngOnInit() {}

}
