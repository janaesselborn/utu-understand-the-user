import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {PersonasComponent} from './areas/personas/personas.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FeatureVotingComponent} from './areas/feature-voting/feature-voting.component';
import {SurveysComponent} from './areas/surveys/surveys.component';
import {DetailComponent} from './areas/personas/detail/detail.component';
import {EditComponent} from './areas/personas/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'area/personas',
    component: PersonasComponent
  },
  {
    path: 'area/personas/details/:id/:name',
    component: DetailComponent
  },
  {
    path: 'area/personas/edit',
    component: EditComponent
  },
  {
    path: 'area/featurevoting',
    component: FeatureVotingComponent
  },
  {
    path: 'area/surveys',
    component: SurveysComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
