import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CarDTO} from '../interfaces/CarDTO';
import {UserDTO} from '../interfaces/UserDTO';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private CARS_URL = 'cars';
  private USERS_URL = 'users';
  private LOGIN_URL = 'login';
  private REGISTER_URL = 'register';
  private LOGOUT_URL = 'logout';

  constructor(private http: HttpClient) {
  }

  car = {

    getCars: (): Observable<CarDTO[]> => {
      return this.http.get<CarDTO[]>(`${environment.BASE_URL}/${this.CARS_URL}`);
    },
    saveCar: (car: CarDTO): Observable<void> => {
      return this.http.post<void>(`${environment.BASE_URL}/${this.CARS_URL}`, car);
    }
  };

  user = {

    login: (user: UserDTO): Observable<UserDTO> => {
      return this.http.post<UserDTO>(`${environment.BASE_URL}/${this.LOGIN_URL}`, user);
    },
    logout: (): Observable<void> => {
      return this.http.get<void>(`${environment.BASE_URL}/${this.LOGOUT_URL}`);
    },
    register: (user: UserDTO): Observable<void> => {
      return this.http.post<void>(`${environment.BASE_URL}/${this.REGISTER_URL}`, user);
    },
    getUsers: (): Observable<UserDTO[]> => {
      return this.http.get<UserDTO[]>(`${environment.BASE_URL}/${this.USERS_URL}`);
    },
  };

}
