import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  isActive: boolean = true;
  ngOnInit(): void {
  }
  onLocationHandle(){
    this.isActive = false;
    console.log("hi I put"); 
  }
  onLunchTymeHandle(){
    this.isActive = true;
  }
}
