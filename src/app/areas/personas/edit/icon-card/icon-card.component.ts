import {Component, Input, OnInit} from '@angular/core';
import {TechnicalDevice} from '../../technical-device';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss'],
})
export class IconCardComponent implements OnInit {
  @Input() technicalDevice: TechnicalDevice;

  constructor() { }

  ngOnInit() {}

}
