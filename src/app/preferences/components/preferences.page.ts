import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../../app.component';

enum Language {
  english = 'en',
  deutsch = 'de'
}

@Component({
  selector: 'app-preferences',
  templateUrl: 'preferences.page.html',
  styleUrls: ['preferences.page.scss']
})
export class PreferencesPage {
  language: string;

  constructor(private translate: TranslateService, private app: AppComponent) {
  }

  changeLanguage() {
    this.language = this.translate.currentLang;

    if (this.languageIsSetToEnglish()) {
      this.translate.use(Language.deutsch);
      this.app.sideMenu(this.translate.currentLang);
    } else if (this.languageIsSetToGerman()) {
      this.translate.use(Language.english);
      this.app.sideMenu(this.translate.currentLang);
    }
  }

  languageIsSetToEnglish = (): boolean => this.language === Language.english;
  languageIsSetToGerman = (): boolean => this.language === Language.deutsch;
}
