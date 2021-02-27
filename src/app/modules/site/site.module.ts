import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AnnuityComponent } from './modules/annuity/annuity.component';
import { ComplexityComponent } from './modules/complexity/complexity.component';
import { CreateAccountFormComponent } from './modules/create-account-form/create-account-form.component';
import { DigitalAccountComponent } from './modules/digital-account/digital-account.component';
import { HomeComponent } from './modules/home/home.component';
import { SimplifyLifeComponent } from './modules/simplify-life/simplify-life.component';
import { SiteComponent } from './site.component';
import { SiteRoutingModule } from './site.routing.module';

@NgModule({
  declarations: [
      SiteComponent,
      HomeComponent,
      CreateAccountFormComponent,
      DigitalAccountComponent,
      AnnuityComponent,
      ComplexityComponent,
      SimplifyLifeComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SiteComponent
  ]
})
export class SiteModule { }
