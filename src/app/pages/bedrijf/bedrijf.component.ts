import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bedrijf',
  templateUrl: './bedrijf.component.html',
  styleUrls: ['./bedrijf.component.css'],
})
export class BedrijfComponent implements OnInit {
  activeComponent: string = 'algemeen';
  constructor() {}

  ngOnInit(): void {}
  currentItem = 'Bedrijf ';
  showActiveComponent(component: string) {
    this.activeComponent = component;
  }
  className = 'false';
  addItem(newItem: string) {
    this.className = newItem;
  }
}
