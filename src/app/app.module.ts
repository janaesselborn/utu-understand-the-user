import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PersonasComponent} from './areas/personas/personas.component';
import {EditComponent} from './areas/personas/edit/edit.component';
import {DetailComponent} from './areas/personas/detail/detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatGridListModule} from '@angular/material/grid-list';
import {IconCardComponent} from './areas/personas/edit/icon-card/icon-card.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {GeoDbFreeModule} from 'wft-geodb-angular-client';
import {LocationFinderComponent} from './areas/personas/edit/location-finder/location-finder.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {SliderWithTextOnSideComponent} from './areas/personas/edit/slider-with-text-on-side/slider-with-text-on-side.component';
import {PersonaCardComponent} from './areas/personas/persona-card/persona-card.component';

// environment
import { environment } from '../environments/environment';

// Firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {PersonalityRangeComponent} from './areas/personas/detail/personality-range/personality-range.component';
import {ProfileComponent} from './profile/profile.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {FeatureItemComponent} from './areas/feature-voting/feature-item/feature-item.component';
import {FeatureVotingComponent} from './areas/feature-voting/feature-voting.component';
import {MatButtonModule} from '@angular/material/button';
import {VoteButtonComponent} from './areas/feature-voting/vote-button/vote-button.component';
import {FeatureCommentComponent} from './areas/feature-voting/feature-comment/feature-comment.component';
import {SpecialFeaturesComponent} from './areas/feature-voting/special-features/special-features.component';
import {VotesComponent} from './areas/feature-voting/votes/votes.component';
import {KnowHowComponent} from './know-how/know-how.component';
import {MatIconModule} from '@angular/material/icon';
import {ArticleComponent} from './know-how/article/article.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DropZoneComponent} from './areas/personas/edit/drop-zone/drop-zone.component';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
    declarations: [
        AppComponent,
        PersonasComponent,
        DetailComponent,
        EditComponent,
        IconCardComponent,
        LocationFinderComponent,
        SliderWithTextOnSideComponent,
        PersonaCardComponent,
        PersonalityRangeComponent,
        ProfileComponent,
        FeatureItemComponent,
        FeatureVotingComponent,
        VoteButtonComponent,
        FeatureCommentComponent,
        SpecialFeaturesComponent,
        VotesComponent,
        KnowHowComponent,
        ArticleComponent,
        DropZoneComponent
    ],
  entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        DragDropModule,
        MatGridListModule,
        MatExpansionModule,
        MatAutocompleteModule,
        GeoDbFreeModule.forRoot({
            apiKey: null,
            serviceUri: 'http://geodb-free-service.wirefreethought.com'
        }),
        MatSliderModule,
        MatSelectModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireStorageModule,
        MatProgressBarModule,
        MatTabsModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatStepperModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
