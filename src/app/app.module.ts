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

@NgModule({
    declarations: [
        AppComponent,
        PersonasComponent,
        DetailComponent,
        EditComponent,
        IconCardComponent,
        LocationFinderComponent,
        SliderWithTextOnSideComponent,
        PersonaCardComponent
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
        AngularFireStorageModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
