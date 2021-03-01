import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { DepositsComponent } from './pages/deposits/deposits.component';
import { PlansComponent } from './pages/plans/plans.component';

const routes: Routes = [
  // {
  //   path: '', component: AccountComponent,
  // },
  {
    path: '', component: HeaderDashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeDashboardComponent,
      },
      {
        path: 'deposits',
        component: DepositsComponent,
      },
      {
        path: 'plans',
        component: PlansComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
