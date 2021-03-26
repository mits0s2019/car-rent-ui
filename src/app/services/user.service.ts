import { Injectable } from '@angular/core';
import { Registration } from '../interfaces/registration';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[] = [];
  
  constructor() {
    console.log("UserService initialized")
   }

  insertUser(userRegistration: Registration): void{
  
    this.users.push({
      username: userRegistration.username,
      email: userRegistration.email});
  }

  getUsers(): User[]{
    return [...this.users];
  }
}
