import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { ItemsRestService } from '../services/items-service';
import { Item } from '../models/items-model';
import { ItemStorage } from '../../inventory/models/storage-model';
import {take} from 'rxjs/operators';

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
  storage: ItemStorage;
  storages: ItemStorage[];
  items = new Array();

  constructor(private readonly itemsRestService: ItemsRestService) {
    this.storages = [];
    
  }

  getItems() {
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
    this.addItem();
    this.resetFields();
  }

  resetFields() {
    this.name = '';
    this.date = null;
    this.amount = null;
  }

  addItem() {
    const item = {id: 2, name: this.name, date: this.date, amount: this.amount, storage: this.storage};
    this.itemsRestService.addItem(item).pipe(take(1)).subscribe();
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
