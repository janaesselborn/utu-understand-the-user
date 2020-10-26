import {Component, Input, OnInit} from '@angular/core';
import {FeatureVoting} from '../../../shared/feature-request';

@Component({
  selector: 'app-special-features',
  templateUrl: './special-features.component.html',
  styleUrls: ['./special-features.component.scss'],
})
export class SpecialFeaturesComponent implements OnInit {
  @Input() feature: FeatureVoting;

  constructor() { }

  ngOnInit() {}

}
