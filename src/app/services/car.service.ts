import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarDTO} from '../interfaces/CarDTO';
import {environment} from '../../environments/environment';
import {Endpoints} from '../constants/Endpoints';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {
  }

  getCars(): Observable<CarDTO[]> {
    return this.http.get<CarDTO[]>(`${environment.BASE_URL}/${Endpoints.CARS_URL}`);
  }

  saveCar(car: CarDTO): Observable<void> {
    return this.http.post<void>(`${environment.BASE_URL}/${Endpoints.CARS_URL}`, car);
  }
}
