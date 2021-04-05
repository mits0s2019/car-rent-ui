import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../interfaces/user';
import {ApiServiceService} from '../services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiServiceService,
              private router: Router) {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.user = this.loginForm.value;

      this.apiService.user.logIn(this.user)
        .subscribe(data => {
            this.router.navigate(['']);
          },
          error => {
            if (error.status === 403) {
              // set errors
            } else {
              console.log(error);
            }
          });
    }
  }
}
