import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from '../menu-list/menu-list.component';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MenuService } from '../service/menu.service';
import { TREE_SERVICE } from '../sortable-tree/dynamic-data-source';
import { MenuRoutingModule } from './menu-routing.module';
import { BASE_PATH } from '../app.module';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule,
    MenuRoutingModule,
    MatCheckboxModule,
    MatTreeModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
  providers: [
    {provide: TREE_SERVICE, useClass: MenuService},
    {provide: BASE_PATH, useValue: environment.apiBase}
  ]
})
export class MenuModule { }
