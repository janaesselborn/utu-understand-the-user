import { TestBed } from '@angular/core/testing';

import { FeatureVotingService } from './feature-voting.service';

describe('FeatureVotingService', () => {
  let service: FeatureVotingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureVotingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
