import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../interfaces/car';
import { CarCollectionService } from '../services/car-collection.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  @Input() car: Car;

  inCart: boolean = false;

  constructor(private carCollection: CarCollectionService) {}

  ngOnInit(): void {
    console.log('hello from Car Component');
  }

  editCollection() {
    this.inCart = !this.inCart;

    this.carCollection.updateCar(this.car);
  }
}
