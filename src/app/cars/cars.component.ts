import { CarService } from './shared/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor(public carService:CarService) {
  }

  getAllCars(){
    return this.carService.getCars();
  }

  ngOnInit(): void {
  }

}
