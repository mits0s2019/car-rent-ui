import {FormBuilder, FormGroup} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {CarDTO} from '../interfaces/CarDTO';
import {Router} from '@angular/router';
import {CarService} from '../services/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss'],
})
export class AddCarComponent implements OnInit {
  addCarForm: FormGroup;
  car: CarDTO;

  constructor(private formBuilder: FormBuilder, private router: Router, private carService: CarService) {
    console.log('constructor initialized');

    this.addCarForm = this.formBuilder.group({
      url: [''],
      brand: [''],
      price: [''],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.car = this.addCarForm.value;

    this.carService.saveCar(this.car)
      .subscribe(data => console.log('car saved'),
        error => console.log(error));

    this.addCarForm.reset();
    this.router.navigate(['']);
  }
}
