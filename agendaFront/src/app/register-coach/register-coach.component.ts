import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register-coach',
  templateUrl: './register-coach.component.html',
  styleUrls: ['./register-coach.component.scss']
})
export class RegisterCoachComponent implements OnInit {
  firstname;
  lastname;
  coachname;
  email;
  age;
  password;

  constructor(private api:AuthService, private router:Router) { }

  public register(){
    this.api.registerCoach(this.firstname,this.lastname,this.coachname,this.email,this.age,this.password).subscribe(result=>{
      alert(result['message']);
      this.router.navigate(['/home']);
    })
  }

  ngOnInit() {
  }

}
