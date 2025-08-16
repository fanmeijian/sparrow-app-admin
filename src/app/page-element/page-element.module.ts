import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageElementListComponent } from './page-element-list/page-element-list.component';
import { PageElementRoutingModule } from './page-element-routing.module';
import { AngularMaterialModule } from '../angular-material.module';



@NgModule({
  declarations: [
    PageElementListComponent
  ],
  imports: [
    CommonModule,
    PageElementRoutingModule,
    AngularMaterialModule,
  ]
})
export class PageElementModule { }
