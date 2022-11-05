import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PreferencesPage } from './preferences.page';

import { PreferencesPageRoutingModule } from './preferences-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PreferencesPageRoutingModule
  ],
  declarations: [PreferencesPage]
})
export class PreferencesPageModule {}
