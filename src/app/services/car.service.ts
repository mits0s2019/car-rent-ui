import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() {}

  getCars(): Car[] {
    return [
      {
        id: 1,
        url:
          'https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364',
        name: 'name1',
        price: 123,
      },
      {
        id: 2,
        url:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Rolls_Royce_Phantom_IV_1952.JPG/1200px-Rolls_Royce_Phantom_IV_1952.JPG',
        name: 'name2',
        price: 456,
      },
      {
        id: 3,
        url:
          'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        name: 'name3',
        price: 4567,
      },
      {
        id: 4,
        url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBcSUSO0FfFxIsr_dzh-pkWiImOo3NhUY5m6n9a5CDseIqURNijRQF1FrAiomhJhuttY&usqp=CAU',
        name: 'name4',
        price: 4568,
      },
      {
        id: 5,
        url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrC82ERwL8aM1EybgnMxdPLuiWbc6MiQoS7eQf_Tm93NX7gcSPkCqg0RPSdd2fzRmcz1I&usqp=CAU',
        name: 'name5',
        price: 4569,
      },
      {
        id: 6,
        url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9GzXS4BREKjuMQqmZmAq06JC0ldc0ksSj68tqN2Iw8d_i255x0vL4Ek8bOqBqnuvs6og&usqp=CAU',
        name: 'name6',
        price: 45611,
      },
    ];
  }
}
