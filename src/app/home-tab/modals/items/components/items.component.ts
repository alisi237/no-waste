import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { HomeRestService } from 'src/app/home-tab/services/home-tab-service';
import { Item } from 'src/app/home-tab/models/home-tab-model';
import { ItemStorage } from 'src/app/home-tab/models/home-tab-model';

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
  unsortedStorages: any;
  storageId: string;

  constructor(private readonly homeRestService: HomeRestService) {
    this.storages = [];
  }

  ngOnInit() {
    this.fetchData();
  }

  private async fetchData() {
    return await Promise.all([
      this.homeRestService.getStorages()
    ]).then(res => {
      this.unsortedStorages = res[0];
      this.storages = this.unsortedStorages.data.storages;
    });
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.resetFields();
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
    this.findStorage(this.storage);
    this.addItem({ id: null, name: this.name, date: this.date, amount: this.amount, storage: this.storageId });
    this.resetFields();
  }

  findStorage(name: string) {
    this.fetchData();
    const matchingStorage = this.storages.filter(storage => storage.name === name.trim());
    this.storageId = matchingStorage[0]['_id'];
  }

  resetFields() {
    this.name = '';
    this.date = null;
    this.amount = null;
  }

  addItem(item: Item) {
    this.homeRestService.addItem(item).pipe().subscribe();
  }

  addToStorages(newStorage: string) {
    this.homeRestService.addStorage({ id: null, name: newStorage }).pipe().subscribe();
    this.newStorage = null;
  }
}
