import { Component, ViewChild } from '@angular/core';
import { IonModal, AlertController } from '@ionic/angular';
import { HomeRestService } from 'src/app/home-tab/services/home-tab-service';
import { map, take } from 'rxjs/operators';
import { Item } from 'src/app/home-tab/models/home-tab-model';

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.scss']
})
export class RegistrationComponent {
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
