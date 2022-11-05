import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GroupsPage } from './groups/groups.page';
import { HomeTabPage } from './home-tab/home-tab.page';
import { PreferencesPage } from './preferences/preferences.page';
import { ProfilePage } from './profile/profile.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home-tab',
    component: HomeTabPage,
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'preferences',
    component: PreferencesPage
  },
  {
    path: 'profile',
    component: ProfilePage
  },
  {
    path: 'groups',
    component: GroupsPage
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
