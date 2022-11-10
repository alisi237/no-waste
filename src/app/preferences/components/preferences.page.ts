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
  language: Language;

  constructor(private translate: TranslateService) {
  }

  changeLanguage(currentLanguage: string) {
    console.log(currentLanguage);
    if (currentLanguage === Language.english) {
      this.translate.use(Language.deutsch);
    } else {
      this.translate.use(Language.english);
    }
  }
}
