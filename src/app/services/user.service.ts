import { Injectable } from '@angular/core';
import { Registration } from '../interfaces/registration';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [{ id: 12, username: 'user1', email: 'email@email.com' }];

  constructor() {
    console.log('UserService initialized');
  }

  insertUser(userRegistration: Registration): void {
    this.users.push({
      id: Math.random(),
      username: userRegistration.username,
      email: userRegistration.email,
    });
  }

  getUsers(): User[] {
    return [...this.users];
  }
}
