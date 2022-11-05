import { Component, ViewChild } from '@angular/core';
import { InventoryComponent } from '../modals/inventory/components/inventory.component';
import { ItemsComponent } from '../modals/items/components/items.component';

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

  constructor() {
  }

  refresh() {
    this.refreshStorages();
    this.refreshItems();
    this.inventoryComponent.fillStorages();
  }

  refreshStorages() {
    this.storages = this.itemsComponent.getStorages();
    this.storages.forEach(storage => {
      this.inventoryComponent.addStorage(storage);
    });
  }

  refreshItems() {
    this.items = this.itemsComponent.getItems();
    this.items.forEach(item => {
      this.inventoryComponent.addItem(item);
    });
  }
}
