import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserDTO} from '../interfaces/UserDTO';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Endpoints} from '../constants/Endpoints';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(`${environment.BASE_URL}/${Endpoints.USERS_URL}`);
  }
}
