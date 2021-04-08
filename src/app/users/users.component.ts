import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserDTO} from '../interfaces/UserDTO';
import {UserService} from '../services/user.service';
import {Page, Pageable} from '@intersalonica/ng-dynamic-table/lib/pagination';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {

  showLoader;
  users: UserDTO[];
  page: Page<UserDTO>;
  radioProps = [
    {value: 'username'},
    {value: 'firstname'},
    {value: 'lastname'},
  ];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getPagedData({
      pageSize: 5,
      pageIndex: 0,
    });

  }

  getPagedData(event: Pageable): any {

    const pageable: Pageable = {
      pageSize: event.pageSize,
      pageIndex: event.pageIndex,
      sort: [
        {sortType: 'asc', sortField: 'username'}
      ]
    };

    this.showLoader = true;

    setTimeout(() => { // this is in order to demonstrate the ng-loader functionality

      this.userService.getPageableUsers(pageable).subscribe(res => {
        this.users = res.content;
        this.page = res;
      }).add(() => {
        this.showLoader = false;
      });

    }, 1000);
  }

  getRadioValue(value): string {
    console.log(value);
    return value;
  }
}

