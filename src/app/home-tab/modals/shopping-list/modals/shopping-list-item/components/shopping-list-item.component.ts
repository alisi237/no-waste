import {Component, ViewChild} from '@angular/core';
import {IonModal} from '@ionic/angular';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: 'shopping-list-item.component.html',
  styleUrls: ['shopping-list-item.component.scss']
})
export class ShoppingListItemComponent {
  @ViewChild(IonModal) modal: IonModal;

  name: string;
  amount: number;

  constructor() {
  }
}
