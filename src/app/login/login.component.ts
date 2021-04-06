import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserDTO} from '../interfaces/UserDTO';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: UserDTO;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
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

      this.authService.login(this.user)
        .subscribe(data => {
            this.router.navigate(['']);
          },
          error => {
            if (error.status === 403) {
              this.loginForm.setErrors({invalidCredentials: true});
            } else {
              console.log(error);
            }
          });
    }
  }
}
