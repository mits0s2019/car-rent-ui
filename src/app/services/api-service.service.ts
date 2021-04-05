import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Car} from '../interfaces/car';
import {catchError} from 'rxjs/operators';
import {Registration} from '../interfaces/registration';
import {User} from '../interfaces/user';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private CARS_URL = 'cars';
  private USERS_URL = 'users';
  private LOGIN_URL = 'login';
  private REGISTER_URL = 'register';

  constructor(private http: HttpClient) {
  }

  car = {

    getCars: (): Observable<Car[]> => {
      return this.http.get<Car[]>(`${environment.BASE_URL}/${this.CARS_URL}`);
    },
    saveCar: (car: Car): Observable<void> => {
      return this.http.post<void>(`${environment.BASE_URL}/${this.CARS_URL}`, car);
    }
  };

  user = {

    logIn: (user: User): Observable<User> => {
      return this.http.post<User>(`${environment.BASE_URL}/${this.LOGIN_URL}`, user);
    },
    register: (user: Registration): Observable<void> => {
      return this.http.post<void>(`${environment.BASE_URL}/${this.REGISTER_URL}`, user);
    },
    getUsers: (): Observable<User[]> => {
      return this.http.get<User[]>(`${environment.BASE_URL}/${this.USERS_URL}`);
    },
  };

}
