import { Component, ViewChild } from '@angular/core';
import { IonModal, AlertController } from '@ionic/angular';
import { HomeRestService } from 'src/app/home-tab/services/home-tab-service';
import { map } from 'rxjs/operators';
import { Item, ItemStorage } from 'src/app/home-tab/models/home-tab-model';

@Component({
  selector: 'app-inventory',
  templateUrl: 'inventory.component.html',
  styleUrls: ['inventory.component.scss']
})
export class InventoryComponent {
  @ViewChild(IonModal) modal: IonModal;

  name: string;
  storages: ItemStorage[];
  items: Item[];

  constructor(private alertController: AlertController, private readonly itemsRestService: HomeRestService, private readonly homeRestService: HomeRestService) {
    this.storages = [];
    this.items = [];
  }

  getItems() {
    this.homeRestService.getItems().pipe().subscribe((item: any) => { 
      this.items = item.data.items;
    });
    return this.items;
  }

  getStorages() {
    this.homeRestService.getStorages().pipe().subscribe((storage: any) => { 
      this.storages = storage.data.storages;
    });
    return this.storages;
  }

  /*
  addStorage(storage: any) {
    if (!this.storageAlreadyExists(storage)) {
      this.storages.push({ name: storage });
    }
  }

  storageAlreadyExists(storageName: any) {
    let isIncluded = false;
    this.storages.forEach(storage => {
      if (storage.name === storageName) {
        isIncluded = true;
      }
    });
    return isIncluded;
  }*/

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  fillStorages() {
    /*
    const items = this.getItems();
    if(items) {
      items.forEach(item => {
        this.storages.forEach(storage => {
          if(storage.name === item.storage.trim() && !storage.items.includes(item)) {
            storage.items.push(item);
          }
        });
      });
    }*/
  }

  amountUp(item: any) {
    item.amount += 1;
  }

  amountDown(item: any) {
    if (item.amount > 1) {
      item.amount -= 1;
    }
    else {
      //this.removeItem(item);
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
}
