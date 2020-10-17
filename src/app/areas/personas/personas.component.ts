import { Component, OnInit } from '@angular/core';
import {Persona} from '../../shared/persona';
import {PersonaService} from '../../shared/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private personaService: PersonaService) {}

  ngOnInit() {
    const personasRes = this.personaService.getPersonaList();
    personasRes.snapshotChanges().subscribe(res => {
      this.personas = [];
      res.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.personas.push(a as Persona);
      });
    });
  }
}

