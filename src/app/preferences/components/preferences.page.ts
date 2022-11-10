import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private translate: TranslateService) {
  }

  changeLanguage() {
    this.language = this.translate.currentLang;

    if (this.languageIsSetToEnglish()) {
      this.translate.use(Language.deutsch);
    } else if (this.languageIsSetToGerman()){
      this.translate.use(Language.english);
    }
  }

  languageIsSetToEnglish = (): boolean => this.language === Language.english;
  languageIsSetToGerman = (): boolean => this.language === Language.deutsch;
}
