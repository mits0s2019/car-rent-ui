import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Registration } from '../interfaces/registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerData:Registration;
  
  registrationForm = this.formBuilder.group({
    username: '',
    email: '',
    password: ''
  });
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    console.log("RegisterComponent initialized")
    // this.registrationForm.get('username').value;
  }

}