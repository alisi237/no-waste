import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanTabPage } from './scan-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ScanTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScanTabPageRoutingModule {}
