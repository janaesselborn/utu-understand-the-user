import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss'],
})
export class VotesComponent implements OnInit {
  @Input() votes: number;

  constructor() { }

  ngOnInit() {}

}
