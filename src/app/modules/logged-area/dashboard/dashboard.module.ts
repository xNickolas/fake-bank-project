import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccountComponent } from './components/account/account.component';
import { CreditAccountComponent } from './components/credit-account/credit-account.component';
import { LatestStatementsComponent } from './components/latest-statements/latest-statements.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DepositsComponent } from './pages/deposits/deposits.component';
import { PlansComponent } from './pages/plans/plans.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AccountComponent,
    CreditAccountComponent,
    LatestStatementsComponent,
    DepositsComponent,
    PlansComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule
  ],
  exports: []
})
export class DashboardModule { }
