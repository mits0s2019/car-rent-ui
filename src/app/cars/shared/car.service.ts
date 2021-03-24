import { CARS } from './mock-cars';
import { Injectable } from '@angular/core';

// this is used if we want to inject anything in this service ?
// @Injectable({
//   providedIn: 'root'
// })
export class CarService {

  constructor() { }

  getCars(){
    return CARS;
  }
}
