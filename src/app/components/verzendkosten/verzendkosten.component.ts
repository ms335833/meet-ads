import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verzendkosten',
  templateUrl: './verzendkosten.component.html',
  styleUrls: ['./verzendkosten.component.css']
})
export class VerzendkostenComponent implements OnInit {
  activeComponent: string = 'nederland';
  constructor() { }

  ngOnInit(): void {
  }
  showActiveComponent(component: string) {
    this.activeComponent = component;
  }
}
