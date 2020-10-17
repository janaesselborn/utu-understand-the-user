import {Component, Input, OnInit} from '@angular/core';
import {Persona} from '../../../shared/persona';
import {Router} from '@angular/router';

@Component({
  selector: 'app-persona-card',
  templateUrl: './persona-card.component.html',
  styleUrls: ['./persona-card.component.scss'],
})
export class PersonaCardComponent implements OnInit {
  @Input()
  persona: Persona;

  constructor(private router: Router) { }

  ngOnInit() {}

  openDetailPersona() {
    this.router.navigate(['area/personas/details', this.persona.id, this.persona.name]);
  }
}
