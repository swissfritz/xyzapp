import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'start',
        loadChildren: () => import('../start/start.module').then( m => m.StartPageModule)
      },
      {
        path: 'anfahrt',
        loadChildren: () => import('../anfahrt/anfahrt.module').then( m => m.AnfahrtPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/menu/start',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
