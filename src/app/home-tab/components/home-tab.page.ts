import { Component, ViewChild } from '@angular/core';
import { InventoryComponent } from '../modals/inventory/components/inventory.component';
import { ItemsComponent } from '../modals/items/components/items.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-tab',
  templateUrl: 'home-tab.page.html',
  styleUrls: ['home-tab.page.scss']
})
export class HomeTabPage {
  @ViewChild(ItemsComponent) itemsComponent: ItemsComponent;
  @ViewChild(InventoryComponent) inventoryComponent: InventoryComponent;

  items: any;
  storages: any;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
}
