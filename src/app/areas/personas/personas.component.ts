import { Component, OnInit } from '@angular/core';
import {Persona} from './persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
})
export class PersonasComponent implements OnInit {
  // Example Data
  personaMS = new Persona('Marie Sommer', 'assets/images/persona_marie_sommer.jpg', 'UX Designerin');
  personaBL = new Persona('Bärbel Lagermann', 'assets/images/persona_baerbel_lagermann.jpg', 'Logistikerin');
  personaMB = new Persona('Matthias Berner', 'assets/images/persona_matthias_berner.jpg', 'Product Owner');

  personas: Persona[] = [this.personaMS, this.personaBL, this.personaMB];

  constructor() {}

  ngOnInit() {}

}

