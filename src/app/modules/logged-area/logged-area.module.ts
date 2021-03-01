import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './dashboard/components/sidebar/sidebar.component';

import { LoggedAreaRoutingModule } from './logged-area-routing.module';
import { LoggedAreaComponent } from './logged-area.component';



@NgModule({
  declarations: [
    LoggedAreaComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    LoggedAreaRoutingModule
  ]
})
export class LoggedAreaModule { }
