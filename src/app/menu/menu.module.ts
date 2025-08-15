import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { TreeModule } from '@sparrowmini/common-ui-nm';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    MenuAdminComponent,
    MenuListComponent,
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
    TreeModule,
    MatMenuModule,
  ],
  providers: [

  ]
})
export class MenuModule { }
