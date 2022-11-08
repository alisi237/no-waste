import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { ProfilePage } from '../profile/components/profile.page';
import { HomeTabPage } from '../home-tab/components/home-tab.page';
import { ItemsComponent } from '../home-tab/modals/items/components/items.component';
import { InventoryComponent } from '../home-tab/modals/inventory/components/inventory.component';



@NgModule({
  declarations: [
    ProfilePage
  ],
  imports: [
    CommonModule,
    TranslateModule,
    HttpClientModule
  ],
  exports: [
    TranslateModule,
    HttpClientModule,
    ProfilePage
  ]
})
export class SharedModule { }
