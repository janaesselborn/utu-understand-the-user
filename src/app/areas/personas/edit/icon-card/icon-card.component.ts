import {Component, Input, OnInit} from '@angular/core';
import {DragAndDropIconItem} from '../../../../shared/drag-and-drop-icon-item';
import {ItemsService} from '../../../../shared/items.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss'],
})
export class IconCardComponent implements OnInit {
  item$: Observable<DragAndDropIconItem>;
  @Input() type: 'TechnicalDevice' | 'Brand' | 'Hobby' ;
  @Input() id: string;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    switch (this.type) {
      case 'TechnicalDevice':
        this.item$ = this.itemsService.getTechnicalDeviceById(this.id);
        break;
      case 'Brand':
        this.item$ = this.itemsService.getBrandById(this.id);
        break;
      case 'Hobby':
        this.item$ = this.itemsService.getHobbyById(this.id);
        break;

    }
  }
}
