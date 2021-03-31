import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../interfaces/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  @Input() car: Car;

  inCart: boolean = false;

  constructor() {
    // this.activatedRoute.params.subscribe((params) => {
    //   console.log(params);
    // });
    // this.activatedRoute.queryParams.subscribe(params=>{
    //   console.log(params)
    // })
  }

  ngOnInit(): void {
    console.log('hello from Car Component');
  }

  insertCart(carId: number) {
    console.log(carId);
    // call a service
    this.inCart = true;
  }

  removeCart(carId: number) {
    console.log(carId);
    // call a service
    this.inCart = false;
  }
}
