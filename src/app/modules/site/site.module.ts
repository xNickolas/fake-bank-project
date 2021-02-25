import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnnuityComponent } from './modules/annuity/annuity.component';
import { ComplexityComponent } from './modules/complexity/complexity.component';
import { CreateAccountFormComponent } from './modules/create-account-form/create-account-form.component';
import { DigitalAccountComponent } from './modules/digital-account/digital-account.component';
import { HomeComponent } from './modules/home/home.component';
import { SiteRoutingModule } from './site.routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    CreateAccountFormComponent,
    DigitalAccountComponent,
    AnnuityComponent,
    ComplexityComponent,
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
  ],
  exports: [
    HomeComponent,
    CreateAccountFormComponent,
    DigitalAccountComponent,
    AnnuityComponent,
    ComplexityComponent
  ]
})
export class SiteModule { }
