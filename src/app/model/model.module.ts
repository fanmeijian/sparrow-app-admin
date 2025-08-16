import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelListComponent } from './model-list/model-list.component';
import { ModelRoutingModule } from './model-routing.module';
import { AngularMaterialModule } from '../angular-material.module';



@NgModule({
  declarations: [
    ModelListComponent
  ],
  imports: [
    CommonModule,
    ModelRoutingModule,
    AngularMaterialModule,
  ]
})
export class ModelModule { }
