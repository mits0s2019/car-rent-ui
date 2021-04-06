import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiServiceService} from '../services/api-service.service';
import {UserDTO} from '../interfaces/UserDTO';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  user: UserDTO;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiServiceService,
    private router: Router
  ) {
    console.log('constructor initialized');

    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.minLength(4)],
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      confirmationPassword: [''],
    });
  }

  ngOnInit(): void {
    console.log('RegisterComponent initialized');
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.user = this.registrationForm.value;
      this.user.formName = 'user_registration';

      this.apiService.user.register(this.user)
        .subscribe(data => {
            this.router.navigate(['login']);
          },
          error => {
            console.log(error);
          });
    }
  }
}
