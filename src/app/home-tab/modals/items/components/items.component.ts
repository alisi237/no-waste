import {Component, ViewChild} from '@angular/core';
import {IonModal} from '@ionic/angular';
import {HomeRestService} from 'src/app/home-tab/services/home-tab-service';
import {Item} from 'src/app/home-tab/models/home-tab-model';
import {ItemStorage} from 'src/app/home-tab/models/home-tab-model';

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

  constructor(private readonly homeRestService: HomeRestService) {
    this.storages = [];
  }

  getStorages() {
    this.homeRestService.getStorages().pipe().subscribe((storage: any) => {
      this.storages = storage.data.storages;
    });
    return this.storages;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.resetFields();
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
    this.homeRestService.getStorages().pipe().subscribe((storages: any) => {
      // const storageId = storages.find(storage => storage.name === this.storage.trim())?.id;
      const matchingStorage = storages.data.storages.filter(storage => storage.name === this.storage.trim());
       const storageId = matchingStorage[0]._id;
      this.addItem({id: null, name: this.name, date: this.date, amount: this.amount, storage: storageId});
      this.resetFields();
    });
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
    this.homeRestService.addStorage({id: null, name: newStorage}).pipe().subscribe();
    this.newStorage = null;
  }
}
