import { CarsComponent } from './cars.component';
import { CarService } from './shared/car.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CarsComponent],
  providers:[CarService],
  imports: [
    CommonModule
  ],
  exports: [CarsComponent]
})
export class CarsModule { }
