import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { UserDTO } from '../interfaces/UserDTO';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: UserDTO[];
  columnsToDisplay = ['num', 'username', 'firstName', 'lastName', 'email'];


  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.user.getUsers()
      .subscribe(data => this.users = data,
        err => console.log(err));
  }

}
