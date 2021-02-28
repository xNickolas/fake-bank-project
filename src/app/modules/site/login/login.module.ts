import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> b99ddc66ae0ea1ba7986f5b8ea05595ef9af67eb

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
    FormsModule,
    ReactiveFormsModule,
=======
    FormsModule
>>>>>>> b99ddc66ae0ea1ba7986f5b8ea05595ef9af67eb
  ],
  exports: [
    LoginComponent,
  ]
})
export class LoginModule { }
