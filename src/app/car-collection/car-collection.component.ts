import {Component, OnInit} from '@angular/core';
import {CarDTO} from '../interfaces/CarDTO';
import {AutoUnsubscribe, NgTopicService} from '@intersalonica/ng-topic';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-car-collection',
  templateUrl: './car-collection.component.html',
  styleUrls: ['./car-collection.component.scss'],
})
@AutoUnsubscribe()
export class CarCollectionComponent implements OnInit {

  cars: CarDTO[] = [];
  columnsToDisplay = ['brand', 'price'];
  subscription: Subscription;

  constructor(private ngTopicService: NgTopicService) {
  }

  ngOnInit(): void {
    // TODO what the purpose of subscription?
    this.subscription = this.ngTopicService.getTopic('car').subscribe(car => {
      this.cars.includes(car)
        ? (this.cars = this.cars.filter((c) => c.id !== car.id))
        : (this.cars = [car, ...this.cars]);
    });
  }
}
