import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../user';
import {IGoal} from '../goal';
import {ICoach} from '../coach';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userurl="http://localhost:3000/users/";
  coachurl="http://localhost:3000/coachs/";
  goalurl="http://localhost:3000/goals/";

  constructor(private http:HttpClient) { }
  public register(firstname,lastname,username,email,age,gender,profession,nationality,password){
    return this.http.post(this.userurl+"signup",{firstname: firstname, lastname:lastname, username: username, email: email, age: age, gender: gender, profession: profession, nationality: nationality, password: password});
  }
  public registerCoach(firstname,lastname,coachname,email,age,password){
    return this.http.post(this.coachurl+"signup",{firstname:firstname,lastname:lastname,coachname:coachname,email:email,age:age,password:password});
  }
  public login(email,password){
    return this.http.post(this.userurl+"login",{email:email,password:password});
  }
  public loginCoach(email,password){
    return this.http.post(this.coachurl+"login",{email:email,password:password});
  }
  public creategoal(titre,startDate,endDate,owner){
    return this.http.post(this.goalurl,{titre:titre,startDate:startDate,endDate:endDate,owner:owner});
  }
  public getgoals(): Observable<IGoal[]>{
    return this.http.get<IGoal[]>(this.goalurl);
  }
  public getusers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.userurl);
  }
  public getcoachs(): Observable<ICoach[]>{
    return this.http.get<ICoach[]>(this.coachurl);
  }
}
