import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { HomeRestService } from 'src/app/home-tab/services/home-tab-service';
import { Item } from 'src/app/home-tab/models/home-tab-model';
import { ItemStorage } from 'src/app/home-tab/models/home-tab-model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-items',
  templateUrl: 'items.component.html',
  styleUrls: ['items.component.scss']
})
export class ItemsComponent {
  @ViewChild(IonModal) modal: IonModal;

  name: string;
  date: Date;
  amount: number;
  newStorage: string;
  storage: string;
  storages: ItemStorage[];
  items: Item[];

  constructor(private readonly itemsRestService: HomeRestService) {
    this.storages = [];
    this.items = [];

  }

  getItems() {
    this.itemsRestService.getItems().pipe(map((items: Item[]) => items.map(item => this.items.push(item)))).subscribe();
    return this.items;
  }

  getStorages() {
    return this.storages;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.resetFields();
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
    // id needs to be set via database
    this.addItem({ name: this.name, date: null, amount: null, storage: this.storage });
    this.resetFields();
  }

  resetFields() {
    this.name = '';
    this.date = null;
    this.amount = null;
  }

  addItem(item: Item) {
    this.itemsRestService.addItem(item).pipe().subscribe();
    /*this.items.push(
      {
      name: this.name,
      date: this.date,
      amount: this.amount,
      storage: this.storage
      }
    );*/
  }

  addToStorages(newStorage: ItemStorage) {
    this.storages.push(newStorage);
    this.newStorage = '';
  }
}
