import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestellingen',
  templateUrl: './bestellingen.component.html',
  styleUrls: ['./bestellingen.component.css'],
})
export class BestellingenComponent implements OnInit {
  constructor() {}
  HEROES = [
    {
      id: 1,
      afhalen: 'Nee',
      klant: 'E.Driessen',
      orderId: 'DOCfJ_',
      AangemaaktOp: '09 July, 2021 18:49',
      AantalProd: '1',
      total: '€ 108,99',
      Verzendstatus: 'Verzonden',
    },
    {
      id: 2,
      afhalen: 'Nee',
      klant: 'E.Driessen',
      orderId: 'DOCfJ_',
      AangemaaktOp: '09 July, 2021 18:49',
      AantalProd: '1',
      total: '€ 108,99',
      Verzendstatus: 'Verzonden',
    },
    {
      id: 3,
      afhalen: 'Nee',
      klant: 'E.Driessen',
      orderId: 'DOCfJ_',
      AangemaaktOp: '09 July, 2021 18:49',
      AantalProd: '1',
      total: '€ 108,99',
      Verzendstatus: 'Verzonden',
    },
    {
      id: 4,
      afhalen: 'Nee',
      klant: 'E.Driessen',
      orderId: 'DOCfJ_',
      AangemaaktOp: '09 July, 2021 18:49',
      AantalProd: '1',
      total: '€ 108,99',
      Verzendstatus: 'Verzonden',
    },
    {
      id: 5,
      afhalen: 'Nee',
      klant: 'E.Driessen',
      orderId: 'DOCfJ_',
      AangemaaktOp: '09 July, 2021 18:49',
      AantalProd: '1',
      total: '€ 108,99',
      Verzendstatus: 'Verzonden',
    },
    {
      id: 6,
      afhalen: 'Nee',
      klant: 'E.Driessen',
      orderId: 'DOCfJ_',
      AangemaaktOp: '09 July, 2021 18:49',
      AantalProd: '1',
      total: '€ 108,99',
      Verzendstatus: 'Verzonden',
    },
    {
      id: 7,
      afhalen: 'Nee',
      klant: 'E.Driessen',
      orderId: 'DOCfJ_',
      AangemaaktOp: '09 July, 2021 18:49',
      AantalProd: '1',
      total: '€ 108,99',
      Verzendstatus: 'Verzonden',
    },
    {
      id: 8,
      afhalen: 'Nee',
      klant: 'E.Driessen',
      orderId: 'DOCfJ_',
      AangemaaktOp: '09 July, 2021 18:49',
      AantalProd: '1',
      total: '€ 108,99',
      Verzendstatus: 'Verzonden',
    },
  ];
  itemId = 0;
  showPopup = false;
  ngOnInit(): void {}
  currentItem = 'Bestellingen ';
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
