import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {PersonaService} from '../../../shared/persona.service';
import {Observable} from 'rxjs';
import {Persona} from '../../../shared/persona';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  persona$: Observable<Persona>;

  constructor(
      private route: ActivatedRoute,
      private personaService: PersonaService,
      private location: Location) { }

  ngOnInit() {
    this.persona$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
            this.personaService.getPersonaById(params.get('id')))
    );
  }

  goBack() {
    this.location.back();
  }
}
