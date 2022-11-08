import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { ProfilePage } from '../profile/components/profile.page';



@NgModule({
  declarations: [
    ProfilePage
  ],
  imports: [
    CommonModule,
    TranslateModule,
    HttpClientModule
  ],
  exports: [
    TranslateModule,
    HttpClientModule,
    ProfilePage
  ]
})
export class SharedModule { }
