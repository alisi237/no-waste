import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { ProfilePage } from '../profile/components/profile.page';
import { HomeTabPage } from '../home-tab/components/home-tab.page';
import { ItemsComponentModule } from '../home-tab/modals/items/components/items.module';
import { InventoryComponentModule } from '../home-tab/modals/inventory/components/inventory.module';
import { PreferencesPage } from '../preferences/components/preferences.page';
import { GroupsPage } from '../groups/components/groups.page';
import { IonicModule } from '@ionic/angular';
import { ShoppingListComponentModule } from '../home-tab/modals/shopping-list/components/shopping-list.module';



@NgModule({
  declarations: [
    ProfilePage,
    HomeTabPage,
    PreferencesPage,
    GroupsPage
  ],
    imports: [
        CommonModule,
        TranslateModule,
        HttpClientModule,
        ItemsComponentModule,
        InventoryComponentModule,
        IonicModule,
        ShoppingListComponentModule
    ],
  exports: [
    TranslateModule,
    HttpClientModule,
    ProfilePage,
    HomeTabPage,
    PreferencesPage,
    GroupsPage
  ]
})
export class SharedModule { }
