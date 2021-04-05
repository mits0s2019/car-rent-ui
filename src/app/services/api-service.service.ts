import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Car } from '../interfaces/car';
import { catchError } from 'rxjs/operators';
import { Registration } from '../interfaces/registration';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private API = "/api";
  private CARS_URL = "cars"
  private USERS_URL = "users"
  private LOGIN_URL = "login"

  constructor(private http: HttpClient) { }

  car = {

    getCars: (): Observable<Car[]> => {
      return this.http.get<Car[]>(`${this.API}/${this.CARS_URL}`)
        .pipe(catchError(this.handleError));
    },
    saveCar: (car: Car): Observable<void> => {
      return this.http.post<void>(`${this.API}/${this.CARS_URL}`, car)
        .pipe(catchError(this.handleError));
    }
  }

  user = {

    logIn: (user: User): Observable<User> => {
      return this.http.post<User>(`${this.API}/${this.LOGIN_URL}`, user)
        .pipe(catchError(this.handleError));
    },
    saveUser: (user: Registration): Observable<void> => {
      return this.http.post<void>(`${this.API}/${this.USERS_URL}`, user)
        .pipe(catchError(this.handleError));
    },
    getUsers: (): Observable<User[]> => {
      return this.http.get<User[]>(`${this.API}/${this.USERS_URL}`)
        .pipe(catchError(this.handleError));
    },
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
