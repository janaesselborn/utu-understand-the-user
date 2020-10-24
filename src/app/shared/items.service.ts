import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {DragAndDropIconItem} from './drag-and-drop-icon-item';

@Injectable({
    providedIn: 'root'
})
export class ItemsService {
    technicalDeviceListRef: AngularFireList<any>;

    constructor(private db: AngularFireDatabase) {}

    // Get all technical devices
    getTechnicalDeviceList() {
        this.technicalDeviceListRef = this.db.list('/fixdata/technicalDevices');
        return this.technicalDeviceListRef;
    }

    // Get technical Device by ID
    getTechnicalDeviceById(id: string): Observable<DragAndDropIconItem> {
      return this.db.object('/fixdata/technicalDevices/' + id).valueChanges() as Observable<DragAndDropIconItem>;
    }

    // Get brand by ID
    getBrandById(id: string): Observable<DragAndDropIconItem> {
      return this.db.object('/fixdata/brands/' + id).valueChanges() as Observable<DragAndDropIconItem>;
    }

    // Get hobby by ID
    getHobbyById(id: string): Observable<DragAndDropIconItem> {
      return this.db.object('/fixdata/hobbies/' + id).valueChanges() as Observable<DragAndDropIconItem>;
    }
}
