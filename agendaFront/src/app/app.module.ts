import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RegisterCoachComponent } from './register-coach/register-coach.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

let routes = [
  {path:"", redirectTo:"/login", pathMatch:"full"},
  { path: "register", component: RegisterComponent },
  {path: "register-coach", component: RegisterCoachComponent},
  {path: "login", component: LoginComponent},
  {path:"users",component: UsersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegisterCoachComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
