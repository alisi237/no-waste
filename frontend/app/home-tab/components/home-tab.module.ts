import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeTabPage } from './home-tab.page';

import { HomeTabPageRoutingModule } from './home-tab-routing.module';
import { ItemsComponentModule } from './modals/items/items.module';
import { InventoryComponentModule } from './modals/inventory/inventory.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomeTabPageRoutingModule,
    ItemsComponentModule,
    InventoryComponentModule
  ],
  declarations: [HomeTabPage]
})
export class HomeTabPageModule {}
