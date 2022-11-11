import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import english from '../assets/i18n/en.json';
import german from '../assets/i18n/de.json';

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
    this.sideMenu(translate.currentLang);
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }

  sideMenu(currentLanguage: string) {
    console.log("sideMenu(): currentLanguage: " + currentLanguage);
    this.navigate =
      [
        {
          title: `${currentLanguage === 'en' ? english.noWaste.menu.home : german.noWaste.menu.home}`,
          url: '/home-tab',
          icon: 'home'
        },
        {
          title: `${currentLanguage === 'en' ? english.noWaste.menu.preferences : german.noWaste.menu.preferences}`,
          url: '/preferences',
          icon: 'cog'
        },
        {
          title: `${currentLanguage === 'en' ? english.noWaste.menu.profile : german.noWaste.menu.profile}`,
          url: '/profile',
          icon: 'person-circle'
        },
        {
          title: `${currentLanguage === 'en' ? english.noWaste.menu.groups : german.noWaste.menu.groups}`,
          url: '/groups',
          icon: 'people-circle'
        },
      ];
  }
}
