import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
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
