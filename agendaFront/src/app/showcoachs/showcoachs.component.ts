import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-showcoachs',
  templateUrl: './showcoachs.component.html',
  styleUrls: ['./showcoachs.component.scss']
})
export class ShowcoachsComponent implements OnInit {

  Coachs=[];

  constructor(private api:AuthService, private router:Router) { }

  ngOnInit() {
    this.api.getcoachs().subscribe(data=>{
      this.Coachs=data["coachs"]
    });
    console.log(this.Coachs)
  }

}
