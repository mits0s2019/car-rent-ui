import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {UserDTO} from '../interfaces/UserDTO';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  user: UserDTO;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    console.log('constructor initialized');

    this.registrationForm = this.formBuilder.group({
      username: [''],
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

    this.user = this.registrationForm.value;
    this.user.formName = 'user_registration';

    this.authService.register(this.user)
      .subscribe(data => {
          this.router.navigate(['login']);
        },
        error => {
          console.log(error);
        });
  }
}
