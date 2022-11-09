import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemsComponent } from './items.component';

import { ItemsComponentRoutingModule } from './items-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ItemsComponentRoutingModule,
    TranslateModule,
    HttpClientModule
  ],
  declarations: [ItemsComponent],
  exports: [ItemsComponent]
})
export class ItemsComponentModule { }
