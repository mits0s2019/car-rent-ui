import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Registration } from '../interfaces/registration';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerData: Registration;

  // @ViewChild('form') myNgForm: NgForm;

  registrationForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private formBuilder:FormBuilder, private userService :UserService) { }

  ngOnInit(): void {
    console.log("RegisterComponent initialized")
  }

  onSubmit() {
    if(this.registrationForm.valid){

      this.userService.insertUser(this.registrationForm.value)
      // this.myNgForm?.resetForm();
      this.registrationForm.reset();
    }
  }
}