import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init({
      duration: 1500,
    });
  }
  div1: boolean = false;
  div2: boolean = false;
  div3: boolean = false;
  div4: boolean = false;
  activeCollapse: string = '';
  id: string = '1';
  div1Function(value: string) {
    if (value == '1') {
      if (this.div1 === false) {
        this.activeCollapse="1";
        this.div1 = true;
        this.div2 = false;
        this.div3 = false;
        this.div4 = false;
      } else {
        this.activeCollapse="";
        this.div1 = false;
        this.div2 = false;
        this.div3 = false;
        this.div4 = false;
      }
    } else if (value === '2') {
      if (this.div2 === false) {
        this.activeCollapse="2";
        this.div1 = false;
        this.div2 = true;
        this.div3 = false;
        this.div4 = false;
      } else {
        this.activeCollapse="";
        this.div1 = false;
        this.div2 = false;
        this.div3 = false;
        this.div4 = false;
      }
    } else if (value === '3') {
      if (this.div3 === false) {
        this.activeCollapse="3";
        this.div1 = false;
        this.div2 = false;
        this.div3 = true;
        this.div4 = false;
      } else {
        this.activeCollapse="";
        this.div1 = false;
        this.div2 = false;
        this.div3 = false;
        this.div4 = false;
      }
    } else if (value === '4') {
      if (this.div4 === false) {
        this.activeCollapse="4";
        this.div1 = false;
        this.div2 = false;
        this.div3 = false;
        this.div4 = true;
      } else {
        this.activeCollapse="";
        this.div1 = false;
        this.div2 = false;
        this.div3 = false;
        this.div4 = false;
      }
    }
  }
}
