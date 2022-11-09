import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScanTabPage } from './scan-tab.page';

import { ScanTabPageRoutingModule } from './scan-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ScanTabPageRoutingModule
  ],
  declarations: [ScanTabPage]
})
export class ScanTabPageModule { }
