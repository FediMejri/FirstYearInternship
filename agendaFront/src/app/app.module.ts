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
import { CoachsComponent } from './coachs/coachs.component';
import { HomeComponent } from './home/home.component';
import { GoalsComponent } from './goals/goals.component';
import { ShowgoalsComponent } from './showgoals/showgoals.component';
import { ShowusersComponent } from './showusers/showusers.component';
import { ShowcoachsComponent } from './showcoachs/showcoachs.component';

let routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  { path: "register", component: RegisterComponent },
  {path: "register-coach", component: RegisterCoachComponent},
  {path: "login", component: LoginComponent},
  {path:"users",component: UsersComponent},
  {path:"coachs",component: CoachsComponent},
  {path:"home",component: HomeComponent},
  {path:"goals",component:GoalsComponent},
  {path:"showgoals",component:ShowgoalsComponent},
  {path:"showusers",component:ShowusersComponent},
  {path:"showcoachs",component:ShowcoachsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegisterCoachComponent,
    LoginComponent,
    UsersComponent,
    CoachsComponent,
    HomeComponent,
    GoalsComponent,
    ShowgoalsComponent,
    ShowusersComponent,
    ShowcoachsComponent
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
