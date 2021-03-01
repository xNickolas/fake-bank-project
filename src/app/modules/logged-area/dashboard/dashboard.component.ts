import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/auth/auth.service';
import { User } from '../../site/interfaces/createAccount.interface';

@Component({
  selector: 'app-dashboard',
  template: '<app-home-dashboard></app-home-dashboard>',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  show = true;
  user: User;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  logout() {
    this.authService.logOut();
  }

  btnHide() {
    this.show = !this.show;
  }

}
