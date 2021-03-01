import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { PlansComponent } from './pages/plans/plans.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
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
