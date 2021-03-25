import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../interfaces/car';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input() car: Car;

  constructor() { }

  ngOnInit(): void {
    console.log("hello from Car Component")
  }
}
