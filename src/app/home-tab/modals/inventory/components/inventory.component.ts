import { Component, ViewChild } from '@angular/core';
import { IonModal, AlertController } from '@ionic/angular';
import { HomeRestService } from 'src/app/home-tab/services/home-tab-service';
import { Item } from 'src/app/home-tab/models/home-tab-model';

@Component({
  selector: 'app-inventory',
  templateUrl: 'inventory.component.html',
  styleUrls: ['inventory.component.scss']
})
export class InventoryComponent {
  @ViewChild(IonModal) modal: IonModal;

  name: string;
  unsortedStorages: any;
  storages: any;
  unsortedItems: any;
  items: any;
  grouped: any;

  constructor(private alertController: AlertController, private readonly itemsRestService: HomeRestService, private readonly homeRestService: HomeRestService) {
    this.grouped = [];
  }

  ngOnInit() {
    this.fetchData();
  }

  private async fetchData() {
    return await Promise.all([
      this.homeRestService.getItems(),
      this.homeRestService.getStorages()
    ]).then(res => {
      this.unsortedItems = res[0];
      this.items = this.unsortedItems.data.groceries;
      this.unsortedStorages = res[1];
      this.storages = this.unsortedStorages.data.storages;
    });
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  fillStorages() {
    this.storages.forEach(storage => {
      let temp = new this.GroupedList(storage.name);
      this.items.forEach(item => {
        if (item.place === storage._id) {
          temp.itemArray.push(item);
        }
      });
      this.grouped.push(temp);
    });
  }

  amountUp(item: any) {
    item.amount += 1;
  }

  amountDown(item: any) {
    if (item.amount > 1) {
      item.amount -= 1;
    }
    else {
      this.removeItem(item);
    }
  }

  async showAlert(storage: any) {
    const alert = await this.alertController.create({
      header: 'All the remaining items in this storage will be removed as well. Are you sure you want to delete it?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'Yes',
          role: 'confirm',
          handler: () => {
            this.removeStorage(storage);
          },
        },
      ],
    });
    await alert.present();
  }

  removeStorage(storage: any) {
    this.homeRestService.removeStorage(storage.id).pipe().subscribe();
  }

  removeItem(item: Item) {
    this.homeRestService.removeItem(item.id).pipe().subscribe();
  }

  GroupedList = class {
    storageName: string;
    itemArray: Item[] = [];

    constructor(storageName: string) {
      this.storageName = storageName;
    }
  }
}
