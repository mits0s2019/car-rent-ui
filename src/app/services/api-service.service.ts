import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Car } from '../interfaces/car';
import { catchError } from 'rxjs/operators';
import { Registration } from '../interfaces/registration';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private BASE_URL = "http://localhost:8082/api";
  private CARS_URL = "cars"
  private USERS_URL = "users"

  constructor(private http: HttpClient) { }

  car = {

    getCars: (): Observable<Car[]> => {
      return this.http.get<Car[]>(`${this.BASE_URL}/${this.CARS_URL}`)
        .pipe(catchError(this.handleError));
    },
    saveCar: (car: Car): Observable<void> => {
      return this.http.post<void>(`${this.BASE_URL}/${this.CARS_URL}`, car)
        .pipe(catchError(this.handleError));
    }
  }

  user = {

    saveUser: (user: Registration): Observable<void> => {
      return this.http.post<void>(`${this.BASE_URL}/${this.USERS_URL}`, user)
        .pipe(catchError(this.handleError));
    },
    getUsers: (): Observable<User[]> => {
      return this.http.get<User[]>(`${this.BASE_URL}/${this.USERS_URL}`)
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
