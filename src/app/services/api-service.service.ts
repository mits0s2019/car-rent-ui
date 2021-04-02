import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Car } from '../interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private BASE_URL = "http://localhost:8082/api/";
  private CARS_URL = "cars"
  private USERS_URL = "users"

  private carsArray: Car[] = [];

  constructor(private http: HttpClient) { }

  public car = {

    getCars: () => {
      // this.http.get(`${this.BASE_URL}/${this.CARS_URL}`)
      this.http.get("/assets/data/cars.json")
    },
    saveCar: (car: Car) => {

    }
  }


    private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
