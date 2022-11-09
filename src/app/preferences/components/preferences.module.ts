import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PreferencesPage } from './preferences.page';

import { PreferencesPageRoutingModule } from './preferences-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PreferencesPageRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class PreferencesPageModule { }
