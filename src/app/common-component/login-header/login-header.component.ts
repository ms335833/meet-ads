import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css']
})
export class LoginHeaderComponent implements OnInit {

  mySidenav: boolean = false;
  constructor() {
  }
  ngOnInit(): void {
  }
  closeNav() {
    this.mySidenav = false;
  }
  openNav() {
    this.mySidenav = true;
  }

}
