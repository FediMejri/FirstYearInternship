import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email;
  password;
  public input:any;

  constructor(private api:AuthService, private router: Router) { }
  public login(){
    this.api.login(this.email,this.password).subscribe(result=>{
      console.log(result);
      if (result['Auth'] == true){
        this.router.navigate(['/users']);
        localStorage.setItem('key', 'true');
      }else {
        alert(result['message']);
      }
    })
  }
  public loginascoach(){
    this.api.loginCoach(this.email,this.password).subscribe(result=>{
      console.log(result);
      if (result['Auth'] == true){
        this.router.navigate(['/coachs']);
        localStorage.setItem('key', 'true');
      }else {
        alert(result['message']);
      }
    })
  }
  ngOnInit() {
  }

}
