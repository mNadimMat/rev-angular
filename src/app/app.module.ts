import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {LoginService} from './services/login.service';
import { PageCoursComponent } from './page-cours/page-cours.component';
export const BASE_URL ='http://localhost:18080/CsaRestAPI';
export const LOGIN_URL =BASE_URL+'/users/';
export const routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'cours',component:PageCoursComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageCoursComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
