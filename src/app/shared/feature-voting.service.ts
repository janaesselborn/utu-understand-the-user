import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FeatureVotingService {
  featureVotingListRef: AngularFireList<any>;
  specialFeatureVotingListRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { }

  // Get all featureVotings
  getStandardFeatureVotings() {
    this.featureVotingListRef = this.db.list('/featurevoting/standard');
    return this.featureVotingListRef;
  }

  // Get all special Features
  getSpecialFeatureVotings() {
    this.specialFeatureVotingListRef = this.db.list('/featurevoting/special');
    return this.specialFeatureVotingListRef;
  }
}
