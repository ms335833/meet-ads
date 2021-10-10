import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facturen',
  templateUrl: './facturen.component.html',
  styleUrls: ['./facturen.component.css'],
})
export class FacturenComponent implements OnInit {
  popup: boolean = false;
  constructor() {}
  HEROES = [
    {
      id: 1,
      Factuurnr: '324',
      Datum: '09 July, 2021  18:49',
      Klant: 'E.Driessen',
      Betaalmethode: 'Pin',
      Bedrag: '€ 108,99',
      BTW: '€ 108,99',
      Marge: 'Nee',
      Soort: 'Debit',
    },
    {
      id: 2,
      Factuurnr: '324',
      Datum: '09 July, 2021  18:49',
      Klant: 'E.Driessen',
      Betaalmethode: 'Pin',
      Bedrag: '€ 108,99',
      BTW: '€ 108,99',
      Marge: 'Nee',
      Soort: 'Debit',
    },
    {
      id: 3,
      Factuurnr: '324',
      Datum: '09 July, 2021  18:49',
      Klant: 'E.Driessen',
      Betaalmethode: 'Pin',
      Bedrag: '€ 108,99',
      BTW: '€ 108,99',
      Marge: 'Nee',
      Soort: 'Debit',
    },
    {
      id: 4,
      Factuurnr: '324',
      Datum: '09 July, 2021  18:49',
      Klant: 'E.Driessen',
      Betaalmethode: 'Pin',
      Bedrag: '€ 108,99',
      BTW: '€ 108,99',
      Marge: 'Nee',
      Soort: 'Debit',
    },
    {
      id: 5,
      Factuurnr: '324',
      Datum: '09 July, 2021  18:49',
      Klant: 'E.Driessen',
      Betaalmethode: 'Pin',
      Bedrag: '€ 108,99',
      BTW: '€ 108,99',
      Marge: 'Nee',
      Soort: 'Debit',
    },
    {
      id: 6,
      Factuurnr: '324',
      Datum: '09 July, 2021  18:49',
      Klant: 'E.Driessen',
      Betaalmethode: 'Pin',
      Bedrag: '€ 108,99',
      BTW: '€ 108,99',
      Marge: 'Nee',
      Soort: 'Debit',
    },
    {
      id: 7,
      Factuurnr: '324',
      Datum: '09 July, 2021  18:49',
      Klant: 'E.Driessen',
      Betaalmethode: 'Pin',
      Bedrag: '€ 108,99',
      BTW: '€ 108,99',
      Marge: 'Nee',
      Soort: 'Debit',
    },
    {
      id: 8,
      Factuurnr: '324',
      Datum: '09 July, 2021  18:49',
      Klant: 'E.Driessen',
      Betaalmethode: 'Pin',
      Bedrag: '€ 108,99',
      BTW: '€ 108,99',
      Marge: 'Nee',
      Soort: 'Debit',
    },
  ];
  itemId = 0;
  showPopup = false;
  ngOnInit(): void {}
  closeNav() {
    this.popup = false;
  }
  openNav() {
    this.popup = true;
  }
  currentItem = 'Facturen';
  onItemClick(id: any) {
    if (this.HEROES.find((single) => single.id === id) && this.itemId !== id) {
      this.itemId = id;
      this.showPopup = true;
    } else if (
      this.HEROES.find((single) => single.id === id) &&
      this.itemId === id
    ) {
      this.itemId = 0;
      this.showPopup = false;
    }
  }
  className = 'false';
  addItem(newItem: string) {
    this.className = newItem;
  }
}
