import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/internal/ReplaySubject';
import {CarDTO} from '../interfaces/CarDTO';

@Injectable({
  providedIn: 'root',
})
export class CarCollectionService {
  private car = new ReplaySubject<CarDTO>();
  private topics = new Map<string, ReplaySubject<any>>();


  observer = this.car.asObservable();

  constructor() {
  }

  updateCar(newCar: CarDTO) {
    this.car.next(newCar);
  }
}
