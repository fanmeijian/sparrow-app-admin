import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MenuRoutingModule } from './menu-routing.module';


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

  ]
})
export class MenuModule { }
