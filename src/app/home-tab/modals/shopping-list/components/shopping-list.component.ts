import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { ShoppingListItemComponent } from "../modals/shopping-list-item/components/shopping-list-item.component";

@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.scss']
})
export class ShoppingListComponent {
  @ViewChild(IonModal) modal: IonModal;

  shoppingList: ShoppingListItemComponent[] = [];
  shoppingListItem: ShoppingListItemComponent;

  constructor() {
  }

  cancel() {
    this.modal.dismiss('cancel');
  }

  confirm() {
    this.modal.dismiss('confirm');
  }

  addItemToShoppingList() {
    this.shoppingList.push(this.shoppingListItem);
  }
}
