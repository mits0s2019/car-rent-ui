import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Endpoints} from '../constants/Endpoints';
import {Pageable} from '@intersalonica/ng-dynamic-table/lib/pagination';
import {NgDynamicTableService} from '@intersalonica/ng-dynamic-table';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private ngDynamicTableService: NgDynamicTableService) {
  }


  getPageableUsers(pageable: Pageable): Observable<any> {

    const requestHeaders: HttpHeaders = new HttpHeaders({
      'CAR-SHOP-TOKEN': localStorage.getItem(environment.CAR_SHOP_TOKEN)
    });

    return this.ngDynamicTableService.getPagedData(`${environment.BASE_URL}/${Endpoints.USERS_URL}`, pageable, requestHeaders);
  }
}
