import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';
import { RegistrationComponentModule } from '../modals/registration/components/registration.module';

import { ProfilePageRoutingModule } from './profile-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProfilePageRoutingModule,
    RegistrationComponentModule,
    SharedModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule { }
