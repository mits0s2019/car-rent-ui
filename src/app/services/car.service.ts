import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private api:ApiServiceService) { }

  getCars() {
    console.log("get cars")
   
    return this.api.car.getCars();
  }

  saveCar(car: Car) {
    console.log("save car")
    
    return this.api.car.saveCar(car);
  }
}
