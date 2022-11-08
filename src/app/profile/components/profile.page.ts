import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  @ViewChild(IonModal) modal: IonModal;

  name: string;
  email: string;
  password: string;
  passwconf: string;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  resetFields() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.passwconf = '';
  }

  onWillDismiss(event: Event) {
    this.resetFields();
  }

}
