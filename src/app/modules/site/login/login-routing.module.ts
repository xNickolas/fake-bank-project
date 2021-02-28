import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteComponent } from '../site.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'site', component: SiteComponent},
  { path: 'dashboard', component: SiteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
