import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccountComponent } from './components/account/account.component';
import { CreditAccountComponent } from './components/credit-account/credit-account.component';
import { LatestStatementsComponent } from './components/latest-statements/latest-statements.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    AccountComponent,
    CreditAccountComponent,
    LatestStatementsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardComponent,
    SidebarComponent,
    AccountComponent,
    CreditAccountComponent,
    LatestStatementsComponent,
  ]
})
export class DashboardModule { }
