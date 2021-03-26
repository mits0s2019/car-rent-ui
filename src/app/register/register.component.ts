import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Registration } from '../interfaces/registration';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerData:Registration;
  
  registrationForm = this.formBuilder.group({
    username: [''],
    email: [''],
    password: ['']
  });
  constructor(private formBuilder:FormBuilder, private userService :UserService) { }

  ngOnInit(): void {
    console.log("RegisterComponent initialized")
  }

  onSubmit() {
    if(this.registrationForm.valid){
      this.userService.insertUser(this.registrationForm.value)
      this.registrationForm.reset();
    }
  }
}