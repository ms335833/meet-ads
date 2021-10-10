import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactperson',
  templateUrl: './contactperson.component.html',
  styleUrls: ['./contactperson.component.css'],
})
export class ContactpersonComponent implements OnInit {
  HEROES = [
    {
      id: 1,
      email: 'test@gmail.com',
      telnr: '0578545645',
      Zakalijk: 'Nee',
      Aangemaakt_op: '09 July, 2021  18:49',
      Laatste_transactie: '09 July, 2021  18:49',
    },
    {
      id: 2,
      email: 'test@gmail.com',
      telnr: '0578545645',
      Zakalijk: 'Nee',
      Aangemaakt_op: '09 July, 2021  18:49',
      Laatste_transactie: '09 July, 2021  18:49',
    },
    {
      id: 3,
      email: 'test@gmail.com',
      telnr: '0578545645',
      Zakalijk: 'Nee',
      Aangemaakt_op: '09 July, 2021  18:49',
      Laatste_transactie: '09 July, 2021  18:49',
    },
    {
      id: 4,
      email: 'test@gmail.com',
      telnr: '0578545645',
      Zakalijk: 'Nee',
      Aangemaakt_op: '09 July, 2021  18:49',
      Laatste_transactie: '09 July, 2021  18:49',
    },
    {
      id: 5,
      email: 'test@gmail.com',
      telnr: '0578545645',
      Zakalijk: 'Nee',
      Aangemaakt_op: '09 July, 2021  18:49',
      Laatste_transactie: '09 July, 2021  18:49',
    },
    {
      id: 6,
      email: 'test@gmail.com',
      telnr: '0578545645',
      Zakalijk: 'Nee',
      Aangemaakt_op: '09 July, 2021  18:49',
      Laatste_transactie: '09 July, 2021  18:49',
    },
    {
      id: 7,
      email: 'test@gmail.com',
      telnr: '0578545645',
      Zakalijk: 'Nee',
      Aangemaakt_op: '09 July, 2021  18:49',
      Laatste_transactie: '09 July, 2021  18:49',
    },
    {
      id: 8,
      email: 'test@gmail.com',
      telnr: '0578545645',
      Zakalijk: 'Nee',
      Aangemaakt_op: '09 July, 2021  18:49',
      Laatste_transactie: '09 July, 2021  18:49',
    },
    {
      id: 9,
      email: 'test@gmail.com',
      telnr: '0578545645',
      Zakalijk: 'Nee',
      Aangemaakt_op: '09 July, 2021  18:49',
      Laatste_transactie: '09 July, 2021  18:49',
    },
    {
      id: 10,
      email: 'test@gmail.com',
      telnr: '0578545645',
      Zakalijk: 'Nee',
      Aangemaakt_op: '09 July, 2021  18:49',
      Laatste_transactie: '09 July, 2021  18:49',
    },
    {
      id: 11,
      email: 'test@gmail.com',
      telnr: '0578545645',
      Zakalijk: 'Nee',
      Aangemaakt_op: '09 July, 2021  18:49',
      Laatste_transactie: '09 July, 2021  18:49',
    },
  ];
  itemId = 0;
  showPopup = false;
  constructor() {}

  ngOnInit(): void {}
  currentItem = 'Klanten';
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
}
