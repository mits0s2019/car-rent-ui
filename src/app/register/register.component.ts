import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../interfaces/registration';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  registerData: Registration;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiServiceService,
    private router: Router
  ) {
    console.log('constructor initialized');

    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log('RegisterComponent initialized');
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.registerData = this.registrationForm.value;
      // this.userService.insertUser(this.registerData);;
      this.apiService.user.saveUser(this.registerData)
        .subscribe(data => console.log("user saved"),
          error => console.log(error));

      this.registrationForm.reset();
      this.router.navigate(['']);
    }
  }
}
