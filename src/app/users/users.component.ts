import {Component, OnInit} from '@angular/core';
import {UserDTO} from '../interfaces/UserDTO';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: UserDTO[];
  usersTableDefinition = 'usersTableDefinition';

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(data => this.users = data,
        err => console.log(err));
  }
}
