import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;

  constructor(private platform: Platform, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }

  sideMenu() {
    this.navigate =
      [
        {
          title: 'Home',
          url: '/home-tab',
          icon: 'home'
        },
        {
          title: 'Preferences',
          url: '/preferences',
          icon: 'cog'
        },
        {
          title: 'Profile',
          url: '/profile',
          icon: 'person-circle'
        },
        {
          title: 'Groups',
          url: '/groups',
          icon: 'people-circle'
        },
      ];
  }
}
