import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'planet-outline'
    },
    {
      title: 'Personas',
      url: '/area/personas',
      icon: 'people-outline'
    },
    {
      title: 'Surveys',
      url: '/area/surveys',
      icon: 'chatbubbles-outline'
    },
    {
      title: 'Feature Voting List',
      url: '/area/featurevoting',
      icon: 'flag-outline'
    }
  ];

  public projects = [
    {
      title: 'Project A'
    },
    {
      title: 'Project B'
    },
    {
      title: 'Project C'
    },
  ];

  project = {
    form: null
  };

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.project.form = this.projects[0].title;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  }
}
