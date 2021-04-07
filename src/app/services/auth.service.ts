import {Injectable} from '@angular/core';
import {UserDTO} from '../interfaces/UserDTO';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Endpoints} from '../constants/Endpoints';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(user: UserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(`${environment.BASE_URL}/${Endpoints.LOGIN_URL}`, user);
  }

  logout(): Observable<void> {
    return this.http.get<void>(`${environment.BASE_URL}/${Endpoints.LOGOUT_URL}`);
  }

  register(user: UserDTO): Observable<void> {
    return this.http.post<void>(`${environment.BASE_URL}/${Endpoints.REGISTER_URL}`, user);
  }
}
