import {Injectable} from '@angular/core';
import {NgSecurityService} from '@intersalonica/ng-security';
import {ApiServiceService} from './api-service.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public ngSecurityService: NgSecurityService,
              private apiService: ApiServiceService,
              private router: Router) {
  }

  logout(): void {

    this.apiService.user.logout()
      .subscribe(success => {
          this.router.navigate(['']);
        },
        error => console.log('Something went wrong with the logout'));
  }
}
