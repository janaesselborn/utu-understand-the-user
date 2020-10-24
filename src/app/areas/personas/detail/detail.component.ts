import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {PersonaService} from '../../../shared/persona.service';
import {Observable} from 'rxjs';
import {Persona} from '../../../shared/persona';
import {Location} from '@angular/common';
import {ItemsService} from '../../../shared/items.service';
import {PersonalityCriteria} from '../../../shared/personality-criteria';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  persona$: Observable<Persona>;
  personalityCriteria: PersonalityCriteria[] = [
    new PersonalityCriteria('Introvert', 'Extrovert'),
    new PersonalityCriteria('Analytical', 'Creative'),
    new PersonalityCriteria('Passive', 'Active'),
    new PersonalityCriteria('Thinking', 'Feeling'),
    new PersonalityCriteria('Judging', 'Perceiving')
  ];

  constructor(
      private route: ActivatedRoute,
      private personaService: PersonaService,
      private itemsService: ItemsService,
      private location: Location
  ) { }

  ngOnInit() {
    this.persona$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
            this.personaService.getPersonaById(params.get('id')))
    );

    this.persona$.subscribe(persona => {
      this.personalityCriteria[0].value = persona.personality['introvert_extrovert'];
      this.personalityCriteria[1].value = persona.personality['analytical_creative'];
      this.personalityCriteria[2].value = persona.personality['passive_active'];
      this.personalityCriteria[3].value = persona.personality['thinking_feeling'];
      this.personalityCriteria[4].value = persona.personality['judging_perceiving'];
      console.log(this.personalityCriteria);
      console.log(persona.personality);
    });
  }

  goBack() {
    this.location.back();
  }
}
