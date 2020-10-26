import {Component, Input, OnInit} from '@angular/core';
import {FeatureVoting} from '../../../shared/feature-request';

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.scss'],
})
export class FeatureItemComponent implements OnInit {
  @Input() featureVoting: FeatureVoting;

  constructor() { }

  ngOnInit() {}

}
