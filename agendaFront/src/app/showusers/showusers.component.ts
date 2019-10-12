import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.scss']
})
export class ShowusersComponent implements OnInit {

  public Users=[];

  constructor(private api:AuthService,private router:Router) { }

  ngOnInit() {
    this.api.getusers().subscribe(data=>{
      this.Users=data["users"];
    });
    console.log(this.Users);
  }

}
