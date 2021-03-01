import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccountComponent } from './components/account/account.component';
import { CreditAccountComponent } from './components/credit-account/credit-account.component';
import { LatestStatementsComponent } from './components/latest-statements/latest-statements.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DepositsComponent } from './pages/deposits/deposits.component';
import { PlansComponent } from './pages/plans/plans.component';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AccountComponent,
    CreditAccountComponent,
    LatestStatementsComponent,
    DepositsComponent,
    PlansComponent,
    HomeDashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule
  ],
  exports: []
})
export class DashboardModule { }
