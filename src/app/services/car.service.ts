import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCars():Car[]{
    return [
      { url:"url1",name:"name1",cost:123 },
      { url:"url2",name:"name2",cost:456 },
    ]
  }
}
