import {Component, OnInit} from '@angular/core';
import {UserDTO} from '../interfaces/UserDTO';
import {UserService} from '../services/user.service';
import {Page, Pageable} from '@intersalonica/ng-dynamic-table/lib/pagination';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: UserDTO[];
  page: Page<UserDTO>;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {

    this.getPagedData({
      pageSize: 5,
      pageIndex: 0,
    });

  }

  //this method gets called After running ngOnInit method or when user performs one of the following actions: Change page size, Go to next or previous table's page
  getPagedData(event: Pageable): any {

    const pageable: Pageable = {
      pageSize: event.pageSize,
      pageIndex: event.pageIndex,
      sort: [
        {sortType: 'asc', sortField: 'username'}
      ]
    };

    // const filteredValues: Map<string, any> = new Map<string, any>();
    //
    // filteredValues.set('firstname', 'jim');
    // pageable.filter = filteredValues;

    this.userService.getPageableUsers(pageable).subscribe(res => {
      this.users = res.content;
      this.page = res;
    });
  }

}

