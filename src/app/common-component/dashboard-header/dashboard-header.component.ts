import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css'],
})
export class DashboardHeaderComponent implements OnInit {
  activeRoute: string = '';
  mySidenav: boolean = false;
  constructor(private Location: Location) {
    this.activeRoute = this.Location.path();
  }
  logoutPopup = 'false';
  ngOnInit(): void {}
  @Input() item = '';
  @Output() newItemEvent = new EventEmitter<string>();
  closeNav() {
    this.mySidenav = false;
  }
  openNav() {
    this.mySidenav = true;
  }
  logoutModal() {
    if (this.logoutPopup === 'true') {
      this.logoutPopup = 'false';
    } else {
      this.logoutPopup = 'true';
    }
  }
  drawer: Boolean = true;
  showHide() {
    if (this.drawer === false) {
      this.drawer = true;
      this.newItemEvent.emit('true');
    } else {
      this.drawer = false;
      this.newItemEvent.emit('false');
    }
  }
  activeState() {
    if (typeof Storage !== 'undefined') {
      let data = localStorage.getItem('showSidenav');
      if (data === 'true') {
        localStorage.removeItem('showSidenav');
      } else {
        // Store
        localStorage.setItem('showSidenav', 'true');
      }
    }
  }
  onClickedOutside(e: Event) {
    // if ((this.logoutPopup = 'true')) {
      this.logoutPopup = 'false';
    // }
  }
}
