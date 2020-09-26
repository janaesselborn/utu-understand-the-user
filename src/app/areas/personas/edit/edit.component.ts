import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {TechnicalDevice} from '../technical-device';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  personaNameFormControl = new FormControl('', [
    Validators.required
  ]);

  allTechnicalDevices: TechnicalDevice[] = [new TechnicalDevice('Laptop'), new TechnicalDevice('Smartphone'), new TechnicalDevice('Smartwatch') ];
  selectedTechnicalDevices = [new TechnicalDevice('PC')];

  drop(event: CdkDragDrop<TechnicalDevice[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

  /** Predicate function that only allows technical devices to be dropped into a list. */
  isTechnicalDevice(item: CdkDrag<TechnicalDevice>) {
    return item.data.type === 'TechnicalDevice';
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }


  constructor() { }

  ngOnInit() {}

}
