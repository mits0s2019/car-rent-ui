import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { Car } from '../interfaces/car';

@Injectable({
  providedIn: 'root',
})
export class CarCollectionService {
  private car = new ReplaySubject<Car>();
  private topics = new Map<string, ReplaySubject<any>>();

  
  observer = this.car.asObservable();

  constructor() {}

  updateCar(newCar: Car) {
    this.car.next(newCar);
  }
}
