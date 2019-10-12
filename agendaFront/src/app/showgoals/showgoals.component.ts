import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showgoals',
  templateUrl: './showgoals.component.html',
  styleUrls: ['./showgoals.component.scss']
})
export class ShowgoalsComponent implements OnInit {

  public Goals=[];

  constructor(private api:AuthService,private router:Router) { }

  ngOnInit() {
    this.api.getgoals().subscribe(data =>{
      this.Goals=data["goals"]
    });
    console.log(this.Goals);
  }

}
