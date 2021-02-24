import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './modules/home/home.component';
import { SiteRoutingModule } from './site.routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class SiteModule { }
