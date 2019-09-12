import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userurl="http://localhost:3000/users/";
  coachurl="http://localhost:3000/coachs/";

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
}
