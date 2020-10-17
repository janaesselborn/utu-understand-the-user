import {Component, Input, OnInit} from '@angular/core';
import {DragAndDropIconItem} from '../../../../shared/drag-and-drop-icon-item';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss'],
})
export class IconCardComponent implements OnInit {
  @Input() item: DragAndDropIconItem;

  constructor() { }

  ngOnInit() {}

}
