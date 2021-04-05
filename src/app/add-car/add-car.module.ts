import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCarRoutingModule } from './add-car-routing.module';
import { AddCarComponent } from './add-car.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddCarComponent],
  imports: [
    CommonModule,
    AddCarRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class AddCarModule { }