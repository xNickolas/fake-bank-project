import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/shared/services/auth/auth.service';
import { User } from 'src/app/modules/site/interfaces/createAccount.interface';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.sass']
})
export class HeaderDashboardComponent implements OnInit {

  @Input() showValue;
  user: User;

  constructor(
    private authService: AuthService,
  // tslint:disable-next-line: no-unused-expression
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  reloadPage() {
    window.location.reload();
  }

  logout() {
    this.authService.logOut();
  }

  btnHide() {
    console.log(this.showValue);
    this.showValue = !this.showValue;
  }
}
