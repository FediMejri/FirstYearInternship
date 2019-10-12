import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coachs',
  templateUrl: './coachs.component.html',
  styleUrls: ['./coachs.component.scss']
})
export class CoachsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  public logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
