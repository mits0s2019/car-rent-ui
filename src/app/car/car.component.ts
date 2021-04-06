import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { CarDTO } from '../interfaces/CarDTO';
import { CarCollectionService } from '../services/car-collection.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  @Input() car: CarDTO;

  inCart: boolean = false;

  constructor(private carCollection: CarCollectionService) {}

  ngOnInit(): void {
    console.log('hello from CarDTO Component');
  }

  editCollection() {
    this.inCart = !this.inCart;

    this.carCollection.updateCar(this.car);
  }
}
