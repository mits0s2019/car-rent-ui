import {HttpClient} from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {Router} from '@angular/router';
import {CarComponent} from '../car/car.component';
import {CarDTO} from '../interfaces/CarDTO';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  cars: CarDTO[];

  @ViewChildren(CarComponent) carElements: QueryList<CarComponent>;

  constructor(private router: Router, private http: HttpClient) {
    console.log('HomeComponent constructor initialized');

  }

  ngOnInit(): void {

    this.http.get<CarDTO[]>('/assets/data/cars.json')
      .subscribe(data => this.cars = data);

    // this.apiService.car.getCars()
    // .subscribe()
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit initialized');
    this.carElements.changes.subscribe(() => {
      // If clients is set from an async call ( getCars() ) then the elements don't exist in ngAfterViewInit() yet.
      this.carElements.toArray().forEach((carElement) => {
        setInterval(() => {
          if (!carElement.inCart) {
            carElement.car.price = Math.random() * 100000 + 10000;
          }
        }, 1000);
      });
    });
  }

  addCar(event): void {
    this.router.navigate(['add-car']);
  }
}
