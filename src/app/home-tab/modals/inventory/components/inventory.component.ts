import { Component, ViewChild } from '@angular/core';
import { IonModal, AlertController } from '@ionic/angular';
import { HomeRestService } from 'src/app/home-tab/services/home-tab-service';
import { map, take } from 'rxjs/operators';
import { Item } from 'src/app/home-tab/models/home-tab-model';

@Component({
  selector: 'app-inventory',
  templateUrl: 'inventory.component.html',
  styleUrls: ['inventory.component.scss']
})
export class InventoryComponent {
  @ViewChild(IonModal) modal: IonModal;

  name: string;
  storages: any;
  items: Item[];

  constructor(private alertController: AlertController, private readonly itemsRestService: HomeRestService) {
    this.storages = [];
    this.items = [];
  }

  getItems() {
    this.itemsRestService.getItems().pipe(map((items: Item[]) => items.map(item => this.items.push(item)))).subscribe();
    return this.items;
    // return this.items;
  }

  addItem(item: any) {
    this.itemsRestService.addItem(item).pipe().subscribe();
    // this.items.push(item);
  }

  getStorages() {
    return this.storages;
  }

  addStorage(storage: any) {
    if (!this.storageAlreadyExists(storage)) {
      this.storages.push({ name: storage, items: new Array() });
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
  }

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
            //this.removeStorage(storage);
          },
        },
      ],
    });
    await alert.present();
  }

  remove(array: any, element: any) {
    array.splice(array.indexOf(element), 1);
  }
/*
  removeStorage(storage: any) {
    this.remove(this.storages, storage);
    this.items.forEach(item => {
      if (item.storage === storage.name) {
        this.remove(this.items, item);
      }
    });
  }

  removeItem(item: Item) {
    this.itemsRestService.removeItem(item.id).pipe(take(1)).subscribe();
    //this.remove(this.items, item);
    //this.remove(storage.items, item);
  }*/
}
