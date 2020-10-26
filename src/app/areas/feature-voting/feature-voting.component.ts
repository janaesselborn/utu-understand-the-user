import { Component, OnInit } from '@angular/core';
import {FeatureVoting} from '../../shared/feature-request';
import {FeatureVotingService} from '../../shared/feature-voting.service';

@Component({
  selector: 'app-feature-voting',
  templateUrl: './feature-voting.component.html',
  styleUrls: ['./feature-voting.component.scss'],
})
export class FeatureVotingComponent implements OnInit {
  standardFeatureVotings: FeatureVoting[] = [];
  specialFeatureVotings: FeatureVoting[] = [];
  sidepageVisible = false;
  detailFeature: FeatureVoting;
  featureDetailVisible = false;

  constructor(private featureVotingService: FeatureVotingService) { }

  ngOnInit() {
    const featureVotingRes = this.featureVotingService.getStandardFeatureVotings();
    featureVotingRes.snapshotChanges().subscribe(res => {
      this.standardFeatureVotings = [];
      res.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.standardFeatureVotings.push(a as FeatureVoting);
      });
    });

    const specialFeatureVotingRes = this.featureVotingService.getSpecialFeatureVotings();
    specialFeatureVotingRes.snapshotChanges().subscribe(res => {
      this.specialFeatureVotings = [];
      res.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.specialFeatureVotings.push(a as FeatureVoting);
      });
    });
  }

  openSidepage() {
    this.sidepageVisible = true;
  }

  closeSidepage() {
    this.sidepageVisible = false;
  }

  openFeatureSidepage(feature: FeatureVoting) {
    this.detailFeature = feature;
    this.featureDetailVisible = true;
  }

  closeFeatureSidepage() {
    this.featureDetailVisible = false;
  }

}
