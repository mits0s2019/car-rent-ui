import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
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

  @ViewChildren(CarComponent) carElements: QueryList<CarComponent>;

  constructor(private carService: CarService,private router: Router) {
    console.log("HomeComponent constructor initialized");

  }

  ngOnInit(): void {
    console.log('HomeComponent initialized');
    this.carService.getCars().subscribe((data) => (this.cars = data));
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit initialized");
    this.carElements.changes.subscribe(() => {
      // If clients is set from an async call ( getCars() ) then the elements don't exist in ngAfterViewInit() yet.
      this.carElements.toArray().forEach((carElement) => {
        setInterval(() => {
          carElement.inCart
            ? carElement.car.price
            : (carElement.car.price = Math.random() * 100000 + 10000);
        }, 1000);
      });
    });
  }
  
  addCar(event) {
    this.router.navigate(['add-car']);
  }
}
