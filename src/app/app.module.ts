import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { LoginModule } from './modules/site/login/login.module';
import { SiteModule } from './modules/site/site.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteModule,
    DashboardModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
