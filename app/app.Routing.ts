import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }      from './Pages/HomeComponent';
import { AboutComponent }      from './Pages/AboutComponent';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);