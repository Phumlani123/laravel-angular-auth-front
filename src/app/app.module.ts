import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { HttpClientModule } from '@angular/common/http';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientComponent } from './components/client/client.component';
import { NewClientComponent } from './components/new-client/new-client.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    HomeComponent,
    SidebarComponent,
    DashboardComponent,
    ClientComponent,
    NewClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule

  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
