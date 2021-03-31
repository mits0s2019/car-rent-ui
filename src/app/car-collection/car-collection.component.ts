import { Component, OnInit } from '@angular/core';
import { Car } from '../interfaces/car';
import { CarCollectionService } from '../services/car-collection.service';

@Component({
  selector: 'app-car-collection',
  templateUrl: './car-collection.component.html',
  styleUrls: ['./car-collection.component.scss'],
})
export class CarCollectionComponent implements OnInit {
  cars: Car[] = [];
  columnsToDisplay = ['name', 'price'];

  constructor(private carCollection: CarCollectionService) {}

  ngOnInit(): void {
    this.carCollection.observer.subscribe((car) => {
      this.cars.includes(car)
        ? (this.cars = this.cars.filter((c) => c.id !== car.id))
        : (this.cars = [car, ...this.cars]);
    });
  }
}
