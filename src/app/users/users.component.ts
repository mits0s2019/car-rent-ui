import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  columnsToDisplay = ['num','username', 'email'];


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log("UsersComponent initialized")
    this.users = this.userService.getUsers();
  }

}
