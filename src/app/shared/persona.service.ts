import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {Observable} from 'rxjs';
import {Persona} from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personaListRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { }

  // Get all personas
  getPersonaList() {
    this.personaListRef = this.db.list('/personas');
    return this.personaListRef;
  }

  // Get Persona by Id
  getPersonaById(id: string): Observable<Persona> {
    return this.db.object('/personas/' + id).valueChanges() as Observable<Persona>;
  }
}
