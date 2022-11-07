import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

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

  constructor() {

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
