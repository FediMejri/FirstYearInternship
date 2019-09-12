import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstname;
  lastname;
  username;
  email;
  age;
  gender;
  profession;
  nationality;
  password;
  public input:any;

  constructor(private api:AuthService, private router:Router) { }
  public register(){
    this.api.register(this.firstname,this.lastname,this.username,this.email,this.age,this.gender,this.profession,this.nationality,this.password).subscribe(result=>{
      console.log(result);
    })
  }
  ngOnInit() {
  }

}
