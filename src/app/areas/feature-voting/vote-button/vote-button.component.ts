import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.scss'],
})
export class VoteButtonComponent implements OnInit {
  voted = false;

  constructor() { }

  ngOnInit() {}

  vote() {
    this.voted = true;
  }
}
