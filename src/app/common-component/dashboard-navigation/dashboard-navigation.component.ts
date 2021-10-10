import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard-navigation',
  templateUrl: './dashboard-navigation.component.html',
  styleUrls: ['./dashboard-navigation.component.css'],
})
export class DashboardNavigationComponent implements OnInit {
  activeRoute: string = '';
  @Input() className: string = '';
  constructor(private Location: Location) {
    this.activeRoute = this.Location.path();
  }
  ngOnInit(): void {}
}
