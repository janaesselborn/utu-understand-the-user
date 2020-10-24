import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-personality-range',
  templateUrl: './personality-range.component.html',
  styleUrls: ['./personality-range.component.scss'],
})
export class PersonalityRangeComponent implements OnInit {
  @Input() value: number;
  @Input() leftLabel: string;
  @Input() rightLabel: string;

  constructor() { }

  ngOnInit() {}

}
