import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCars():Car[]{
    return [
      { url:"https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364",name:"name1",price:123 },
      { url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Rolls_Royce_Phantom_IV_1952.JPG/1200px-Rolls_Royce_Phantom_IV_1952.JPG",name:"name2",price:456 },
    ]
  }
}
