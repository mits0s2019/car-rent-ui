import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Car } from '../interfaces/car';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cars: Car[];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    console.log('HomeComponent initialized');
    this.carService.getCars().subscribe((data) => (this.cars = data));
  }
}
