import {Component, OnInit} from '@angular/core';
import {NgSecurityService} from '@intersalonica/ng-security';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public ngSecurityService: NgSecurityService) {
  }

  ngOnInit(): void {
  }

}
