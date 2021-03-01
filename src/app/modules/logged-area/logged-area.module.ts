import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderDashboardComponent } from './dashboard/components/header-dashboard/header-dashboard.component';
import { SidebarComponent } from './dashboard/components/sidebar/sidebar.component';

import { LoggedAreaRoutingModule } from './logged-area-routing.module';
import { LoggedAreaComponent } from './logged-area.component';



@NgModule({
  declarations: [
    LoggedAreaComponent,
    SidebarComponent,
    HeaderDashboardComponent,

  ],
  imports: [
    CommonModule,
    LoggedAreaRoutingModule
  ]
})
export class LoggedAreaModule { }
