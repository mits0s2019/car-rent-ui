import {Component, Input, OnInit} from '@angular/core';
import {CarDTO} from '../interfaces/CarDTO';
import {AutoUnsubscribe, NgTopicService} from '@intersalonica/ng-topic';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
@AutoUnsubscribe()
export class CarComponent implements OnInit {
  @Input() car: CarDTO;

  inCart = false;

  constructor(private ngTopicService: NgTopicService) {
  }

  ngOnInit(): void {
    console.log('hello from CarDTO Component');
  }

  send(): void {
    this.inCart = !this.inCart;

    this.ngTopicService.send('car', this.car);
  }
}
