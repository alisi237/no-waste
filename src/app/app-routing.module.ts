import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GroupsPage } from './groups/components/groups.page';
import { HomeTabPage } from './home-tab/components/home-tab.page';
import { PreferencesPage } from './preferences/components/preferences.page';
import { ProfilePage } from './profile/components/profile.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/components/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home-tab',
    component: HomeTabPage,
    loadChildren: () => import('./tabs/components/tabs.module').then(m => m.TabsPageModule)
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
export class AppRoutingModule { }
