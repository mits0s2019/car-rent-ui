import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Car } from '../interfaces/car';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss'],
})
export class AddCarComponent implements OnInit {
  addCarForm: FormGroup;
  car: Car;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiServiceService) {
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
      // save car

      this.addCarForm.reset();
      this.router.navigate(['']);
    }
  }
}
