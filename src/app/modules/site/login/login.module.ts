import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardModule } from '../../dashboard/dashboard.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginComponent,
  ]
})
export class LoginModule { }
