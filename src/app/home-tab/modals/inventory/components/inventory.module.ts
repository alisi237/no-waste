import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventoryComponent } from './inventory.component';

import { InventoryComponentRoutingModule } from './inventory-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    InventoryComponentRoutingModule
  ],
  declarations: [InventoryComponent],
  exports: [InventoryComponent]
})
export class InventoryComponentModule { }
