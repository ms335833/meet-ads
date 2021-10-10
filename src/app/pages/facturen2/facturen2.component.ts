import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facturen2',
  templateUrl: './facturen2.component.html',
  styleUrls: ['./facturen2.component.css']
})
export class Facturen2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentItem = 'Facturen';
  className = 'false';
  popup = false;
  HEROES = [
    {
      id: 1,
      datum: '11 Aug 2011',
      product: '1x MAZDA 121 Minima delectus et',
      bedrag: '€ -0.01',
    },
    {
      id: 2,
      datum: '11 Aug 2011',
      product: '1x MAZDA 121 Minima delectus et',
      bedrag: '€ -0.01',
    }
  ];
  HEROES2 = [
    {
      id: 1,
      product: 'Renault Clio ly Facelift 2018 Ackterkep',
      antal:"1",
      prijis:"€ 399.00",
      btw: '21% excel',
      kortingTotal:"0 % € 482.79"
    },
    {
      id: 2,
      product: 'Renault Clio ly Facelift 2018 Ackterkep',
      antal:"1",
      prijis:"€ 399.00",
      btw: '21% excel',
      kortingTotal:"0 % € 482.79"
    }
  ];
  addItem(newItem: string) {
    this.className = newItem;
  }
  closeNav() {
    this.popup = false;
  }
  openNav() {
    this.popup = true;
  }

}
