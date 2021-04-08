import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserDTO} from '../interfaces/UserDTO';
import {UserService} from '../services/user.service';
import {Page, Pageable, Sort} from '@intersalonica/ng-dynamic-table/lib/pagination';

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

  filterPlaceholder: string;
  filterType: string;
  filterValue: string;

  radioProps = [
    {value: 'username'},
    {value: 'firstname'},
    {value: 'lastname'},
  ];

  pageSize = 5;

  pageIndex = 0;

  sorts: Sort[] = [
    {sortType: 'asc', sortField: 'username'}
  ];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getPagedData({
      pageSize: this.pageSize,
      pageIndex: this.pageIndex,
      sort: this.sorts
    });
  }

  getPagedData(event: Pageable): any {

    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.showLoader = true;

    const pageable: Pageable = {
      pageSize: this.pageSize,
      pageIndex: this.pageIndex,
      sort: this.sorts
    };

    // check if there is any filtering value
    if (this.filterValue) {
      const filteredValues: Map<string, any> = new Map<string, any>();

      filteredValues.set(this.filterType, this.filterValue);
      pageable.filter = filteredValues;
    }

    setTimeout(() => { // this is in order to demonstrate the ng-loader functionality

      this.userService.getPageableUsers(pageable).subscribe(res => {
        this.users = res.content;
        this.page = res;
      }).add(() => {
        this.showLoader = false;
      }); // TODO can we unsubscribe here ?

    }, 1000);
  }

  getRadioValue(value): void {

    this.filterPlaceholder = `Type the ${value}`;
    this.filterType = value;

  }

  getFilterValue(value): void {
    this.filterValue = value;
  }

  onFilterClick(): void {
    this.getPagedData({
      pageSize: this.pageSize,
      pageIndex: this.pageIndex,
      sort: this.sorts
    });
  }
}

