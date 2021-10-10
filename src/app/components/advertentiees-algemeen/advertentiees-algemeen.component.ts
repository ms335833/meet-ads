import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertentiees-algemeen',
  templateUrl: './advertentiees-algemeen.component.html',
  styleUrls: ['./advertentiees-algemeen.component.css'],
})
export class AdvertentieesAlgemeenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  currentItem = 'Advertenties';
  className = 'false';
  addItem(newItem: string) {
    this.className = newItem;
  }
  states: any = {
    allRecord: [
      {
        id: 1,
        name: 'Alexis',
      },
      {
        id: 2,
        name: 'Celisse',
      },
      {
        id: 3,
        name: 'Ag',
      },
      {
        id: 4,
        name: 'Leticia',
      },
      {
        id: 5,
        name: 'Kennett',
      },
      {
        id: 6,
        name: 'Courtney',
      },
      {
        id: 7,
        name: 'Emmaline',
      },
      {
        id: 8,
        name: 'Lawton',
      },
      {
        id: 9,
        name: 'Kipper',
      },
      {
        id: 10,
        name: 'Ellie',
      },
    ],
    filterRecord: [
      {
        id: 1,
        name: 'Alexis',
      },
      {
        id: 2,
        name: 'Celisse',
      },
      {
        id: 3,
        name: 'Ag',
      },
      {
        id: 4,
        name: 'Leticia',
      },
      {
        id: 5,
        name: 'Kennett',
      },
      {
        id: 6,
        name: 'Courtney',
      },
      {
        id: 7,
        name: 'Emmaline',
      },
      {
        id: 8,
        name: 'Lawton',
      },
      {
        id: 9,
        name: 'Kipper',
      },
      {
        id: 10,
        name: 'Ellie',
      },
    ],
  };
  showFilterPopup = false;
  getName = '';
  handleEvent(event: any) {
    if (event) {
      this.showFilterPopup = true;
      let searchedRecord = this.states?.filterRecord?.filter(
        (single: any) =>
          single.name.toLowerCase().indexOf(event.toLowerCase()) !== -1
      );
      this.states.allRecord = searchedRecord;
    } else {
      this.states.allRecord = this.states?.filterRecord;
      this.showFilterPopup = false;
    }
  }
  getUserName(event: any) {
    this.getName = event;
    this.showFilterPopup = false;
  }
}
