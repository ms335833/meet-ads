import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestellingen2',
  templateUrl: './bestellingen2.component.html',
  styleUrls: ['./bestellingen2.component.css'],
})
export class Bestellingen2Component implements OnInit {
  formPopup: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  closeNav() {
    this.formPopup = false;
  }
  openNav() {
    this.formPopup = true;
  }
  currentItem = 'Bestellingen';
  className = 'false';
  addItem(newItem: string) {
    this.className = newItem;
  }
}
