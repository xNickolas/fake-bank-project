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
<<<<<<< HEAD
    DashboardModule,
=======
>>>>>>> fb23fd554fa3ac7d102d2703ba3239b5485850da
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginComponent,
  ]
})
export class LoginModule { }
