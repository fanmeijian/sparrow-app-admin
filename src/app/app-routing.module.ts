import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SortableTreeComponent } from './sortable-tree/sortable-tree.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'menu' },
  { path: 'menu', component: SortableTreeComponent}
  // {path: 'menu', loadChildren: ()=>import('./menu/menu.module').then(m=>m.MenuModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
