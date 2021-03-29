import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CarComponent } from '../car/car.component';
import { Car } from '../interfaces/car';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  cars: Car[];

  // @ViewChild("myCar") myCar:CarComponent;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    console.log('HomeComponent initialized');
    this.cars = this.carService.getCars();
  }

  ngAfterViewInit(): void {
    // this.myCar.car.
  }
}
