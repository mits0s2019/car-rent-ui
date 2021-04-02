import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Car } from '../interfaces/car';
import { Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { coerceStringArray } from '@angular/cdk/coercion';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss'],
})
export class AddCarComponent implements OnInit {
  addCarForm: FormGroup;
  car: Car;

  constructor(private formBuilder: FormBuilder, private router: Router, private carService: CarService) {
    console.log('constructor initialized');

    this.addCarForm = this.formBuilder.group({
      url: [''],
      brand: [''],
      price: [''],
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.addCarForm.valid) {
      this.car = this.addCarForm.value;
      this.carService.saveCar(this.car);

      this.addCarForm.reset();
      this.router.navigate(['']);
    }
  }
}
