import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {NgSecurityService} from '@intersalonica/ng-security';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,
              public ngSecurityService: NgSecurityService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout()
      .subscribe(success => {
          this.router.navigate(['']);
        },
        error => console.log('Something went wrong with the logout'));
  }
}
