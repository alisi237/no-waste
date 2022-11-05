import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemsComponent } from './items.component';

import { ItemsComponentRoutingModule } from './items-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ItemsComponentRoutingModule
  ],
  declarations: [ItemsComponent],
  exports: [ItemsComponent]
})
export class ItemsComponentModule {}
