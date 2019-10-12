import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  titre;
  startDate;
  endDate;
  owner;
  public input:any;

  constructor(private api:AuthService,private router:Router) { }
  public creategoal(){
    this.api.creategoal(this.titre,this.startDate,this.endDate,this.owner).subscribe(result=>{
      this.router.navigate(['/users']);
    });
  }

  ngOnInit() {
  }

}
