import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import {ShoppingListItemComponent} from './shopping-list-item.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    HttpClientModule,
  ],
  declarations: [ShoppingListItemComponent],
  exports: [ShoppingListItemComponent]
})
export class ShoppingListItemComponentModule { }
