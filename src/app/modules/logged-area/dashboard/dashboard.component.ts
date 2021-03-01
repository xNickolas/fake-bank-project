import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  nameUser = 'Usuário';

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logOut();
  }

}
