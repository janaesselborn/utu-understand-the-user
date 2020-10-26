import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../shared/comment';

@Component({
  selector: 'app-feature-comment',
  templateUrl: './feature-comment.component.html',
  styleUrls: ['./feature-comment.component.scss'],
})
export class FeatureCommentComponent implements OnInit {
  @Input() comment: Comment;

  constructor() { }

  ngOnInit() {}

}
