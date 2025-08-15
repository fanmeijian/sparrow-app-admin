import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuListComponent } from './menu/menu-list/menu-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'menu' },
  {path: 'menu', loadChildren: ()=>import('./menu/menu.module').then(m=>m.MenuModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
