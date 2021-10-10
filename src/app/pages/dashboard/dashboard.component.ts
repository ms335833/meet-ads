import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  HEROES = [
    {
      id: 1,
      besteldatum: '09 july, 2021',
      status: 'In afwachting',
      verzenden: 'Ja',
      producten: '1',
      betaling: 'Betaald',
      total: '€ 108,99',
      naar: 'Naar Besteliing',
    },
    {
      id: 2,
      besteldatum: '09 july, 2021',
      status: 'In afwachting',
      verzenden: 'Ja',
      producten: '1',
      betaling: 'Betaald',
      total: '€ 108,99',
      naar: 'Naar Besteliing',
    },
    {
      id: 3,
      besteldatum: '09 july, 2021',
      status: 'In afwachting',
      verzenden: 'Ja',
      producten: '1',
      betaling: 'Betaald',
      total: '€ 108,99',
      naar: 'Naar Besteliing',
    },
  ];
  itemId = 0;
  ngOnInit(): void {}
  currentItem = 'Dashboard ';
  className = 'false';
  addItem(newItem: string) {
    this.className = newItem;
  }
  onItemClick(id: any) {
    this.itemId = id;
  }
}
