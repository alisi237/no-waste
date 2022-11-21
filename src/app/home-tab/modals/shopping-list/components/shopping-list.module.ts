import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list.component';

import { ShoppingListComponentRoutingModule } from './shopping-list-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ShoppingListComponentRoutingModule,
    TranslateModule,
    HttpClientModule,
  ],
  declarations: [ShoppingListComponent],
  exports: [ShoppingListComponent]
})
export class ShoppingListComponentModule { }
