import {Component, ViewChild} from '@angular/core';
import {IonModal} from '@ionic/angular';

@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.scss']
})
export class ShoppingListComponent {
  @ViewChild(IonModal) modal: IonModal;

  amount = 0;
  itemAdded = false;
  private name: string;

  constructor() {
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  amountUp() {
    this.amount += 1;
  }

  amountDown() {
    if (this.amount > 1) {
      this.amount -= 1;
    } else {
      console.log('Amount has reached 0');
    }
  }

  addItemToShoppingList() {
    this.itemAdded = true;
    return this.itemAdded;
  }
}
