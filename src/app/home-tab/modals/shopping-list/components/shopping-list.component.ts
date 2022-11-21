import {Component, ViewChild} from '@angular/core';
import {IonModal} from '@ionic/angular';

@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.scss']
})
export class ShoppingListComponent {
  @ViewChild(IonModal) modal: IonModal;

  private name: string;

  constructor() {
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  amountUp(item: any) {
    item.amount += 1;
  }

  amountDown(item: any) {
    if (item.amount > 1) {
      item.amount -= 1;
    } else {

    }
  }
}
