import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsLoggedGuard } from './modules/shared/guards/is-logged/is-logged.guard';
import { NotLoggedGuard } from './modules/shared/guards/not-logged/not-logged.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/site/site.module').then(m => m.SiteModule)
  },
  { path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [IsLoggedGuard],
  },
  { path: 'login',
    loadChildren: () => import('./modules/site/login/login.module').then(m => m.LoginModule),
    canActivate: [NotLoggedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
