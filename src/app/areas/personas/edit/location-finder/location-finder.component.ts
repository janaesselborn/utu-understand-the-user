import { Component, OnInit } from '@angular/core';
import {PlaceSummary} from 'wft-geodb-angular-client/lib/model/place-summary.model';
import {FormControl} from '@angular/forms';
import {GeoDbService} from 'wft-geodb-angular-client';
import {debounceTime} from 'rxjs/operators';
import {GeoResponse} from 'wft-geodb-angular-client/lib/model/geo-response.model';

@Component({
  selector: 'app-location-finder',
  templateUrl: './location-finder.component.html',
  styleUrls: ['./location-finder.component.scss'],
})
export class LocationFinderComponent implements OnInit {
  filteredOptions: PlaceSummary[];
  locationFormControl = new FormControl();

  constructor(private geoService: GeoDbService) {
    this.locationFormControl.valueChanges.pipe(
        debounceTime(400))
        .subscribe(
        value => this.getCities(value)
    );
  }

  ngOnInit() {}

  private getCities(param: string) {
    this.geoService.findPlaces({
      namePrefix: param,
      countryIds: [],
      minPopulation: 100000,
      types: ['CITY'],
      limit: 10,
      offset: 0
    })
        .subscribe(
            (response: GeoResponse<PlaceSummary[]>) => {
              const totalCount = response.metadata.totalCount;
              const data: PlaceSummary[] = response.data;

              console.log(data);
              this.filteredOptions = data;
              // Do your thing!
            }
        );
  }

}
