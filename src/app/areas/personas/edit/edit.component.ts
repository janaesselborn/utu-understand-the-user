import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {PersonalityCriteria} from '../../../shared/personality-criteria';
import {DragAndDropIconItem} from '../../../shared/drag-and-drop-icon-item';
import {Location} from '@angular/common';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
    statusSelectedValue: string;
    archetypeSelectedValue: string;
    ageSelectedValue: number;
    panelOpenState = true;
    personaNameFormControl = new FormControl('', [
        Validators.required
    ]);
    selectedBrands = [];
    selectedTechnicalDevices = [];
    selectedHobbies = [];

    allStatus: string[] = [
        'Single',
        'Married',
        'In a partnership',
        'Living separately',
        'Divorced',
        'Widowed'
    ];
    allArchetypes: string[] = [
        'Rebel',
        'Fool',
        'Lover',
        'Caregiver',
        'Anyone',
        'Innocent',
        'Ruler',
        'Consultant',
        'Magician',
        'Hero',
        'Creator',
        'Discoverer'
    ];
    allTechnicalDevices: DragAndDropIconItem[] = [
        new DragAndDropIconItem('TechnicalDevice', 'PC', 'desktop-outline'),
        new DragAndDropIconItem('TechnicalDevice', 'Laptop', 'laptop-outline'),
        new DragAndDropIconItem('TechnicalDevice', 'Smartphone', 'phone-portrait-outline'),
        new DragAndDropIconItem('TechnicalDevice', 'Smartwatch', 'watch-outline'),
    ];
    allBrands: DragAndDropIconItem[] = [
        new DragAndDropIconItem('Brand', 'Amazon', 'logo-amazon'),
        new DragAndDropIconItem('Brand', 'Apple', 'logo-apple'),
        new DragAndDropIconItem('Brand', 'Facebook', 'logo-facebook'),
        new DragAndDropIconItem('Brand', 'Microsoft', 'logo-windows'),
        new DragAndDropIconItem('Brand', 'PayPal', 'logo-paypal'),
        new DragAndDropIconItem('Brand', 'Pinterest', 'logo-pinterest'),
        new DragAndDropIconItem('Brand', 'WhatsApp', 'logo-whatsapp')
    ];
    personalityCriteria: PersonalityCriteria[] = [
        new PersonalityCriteria('Introvert', 'Extrovert'),
        new PersonalityCriteria('Analytical', 'Creative'),
        new PersonalityCriteria('Passive', 'Active'),
        new PersonalityCriteria('Thinking', 'Feeling'),
        new PersonalityCriteria('Judging', 'Perceiving')
    ];
    allAges: number[] = [];
    allHobbies: DragAndDropIconItem [] = [
        new DragAndDropIconItem('Hobby', 'Americal Football', 'american-football-outline'),
        new DragAndDropIconItem('Hobby', 'Beer', 'beer-outline'),
        new DragAndDropIconItem('Hobby', 'Bicycle', 'bicycle-outline'),
        new DragAndDropIconItem('Hobby', 'Cafe', 'cafe-outline'),
        new DragAndDropIconItem('Hobby', 'Car Sport', 'car-sport-outline'),
        new DragAndDropIconItem('Hobby', 'Construct', 'construct-outline'),
        new DragAndDropIconItem('Hobby', 'Color', 'color-palette-outline'),
        new DragAndDropIconItem('Hobby', 'Football', 'football-outline'),
        new DragAndDropIconItem('Hobby', 'Gaming', 'game-controller-outline'),
    ];


    drop(event: CdkDragDrop<DragAndDropIconItem[]>) {
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
    isTechnicalDevice(item: CdkDrag<DragAndDropIconItem>) {
        return item.data.type === 'TechnicalDevice';
    }

    isBrand(item: CdkDrag<DragAndDropIconItem>) {
      return item.data.type === 'Brand';
    }

    isHobby(item: CdkDrag<DragAndDropIconItem>) {
      return item.data.type === 'Hobby';
    }

    /** Predicate function that doesn't allow items to be dropped into a list. */
    noReturnPredicate() {
        return false;
    }


    constructor(
        private location: Location
    ) {
    }

    ngOnInit() {
        for (let i = 0; i <= 100; i++) {
            this.allAges.push(i);
        }
    }

    goBack() {
        this.location.back();
    }


}
