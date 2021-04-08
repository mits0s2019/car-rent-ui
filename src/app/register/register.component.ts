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
  emailDomains = [
    {k: 'gmail.com', v: 'gmail.com'},
    {k: 'outlook.com', v: 'outlook.com'},
    {k: 'yahoo.com', v: 'yahoo.com'}
  ];
  ages: object[] = [
    {key: '< 14 years', value: 'child'},
    {key: '15-24 years', value: 'youth'},
    {key: '25-64 years', value: 'adult'},
    {key: '65 > years', value: 'senior'}
  ];

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
      emailDomain: [''],
      password: [''],
      confirmationPassword: [''],
      age: ['']
    });
  }

  ngOnInit(): void {
    console.log('RegisterComponent initialized');
  }

  onSubmit(): void {

    const e = this.registrationForm.controls.email?.value;
    const eDomain = this.registrationForm.controls.emailDomain?.value;

    this.registrationForm.patchValue({email: this.buildEmail(e, eDomain)});

    this.user = this.registrationForm.value;
    console.log(this.user);
    this.user.formName = 'user_registration';

    this.authService.register(this.user)
      .subscribe(data => {
          this.router.navigate(['login']);
        },
        error => {
          console.log(error);
        });
  }

  buildEmail(email, emailDomain): string {
    return `${email}@${emailDomain}`;
  }
}
