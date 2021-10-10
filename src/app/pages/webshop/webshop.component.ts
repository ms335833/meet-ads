import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webshop',
  templateUrl: './webshop.component.html',
  styleUrls: ['./webshop.component.css'],
})
export class WebshopComponent implements OnInit {
  activeComponent: string = 'categorieen';
  constructor() {}

  ngOnInit(): void {}
  currentItem = 'Webshop ';
  showActiveComponent(component: string) {
    this.activeComponent = component;
  }
  className = 'false';
  addItem(newItem: string) {
    this.className = newItem;
  }
}
