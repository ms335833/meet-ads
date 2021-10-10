import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  show = false;
  title = 'angularTests';
  list = ['This Is Going To Be Text As MeetAds Punchline.'];
  public innerWidth: any;
  carousals: number = 4;
  constructor() {}
  ngOnInit(): void {
    AOS.init({ once: true });
    let scrollRef = 0;
    window.addEventListener('scroll', function () {
      // increase value up to 10, then refresh AOS
      scrollRef <= 10 ? scrollRef++ : AOS.refresh();
    });
    this.innerWidth = window.innerWidth;
  }
  carousalsValue() {
    if (innerWidth <= 601) {
      return 1;
    }
    if (innerWidth <= 900) {
      return 2;
    }
    if (innerWidth <= 1200) {
      return 3;
      
    } else {
      return 4;
    }
  }
  play: string = 'Play';
  videodisabled: boolean = true;

  changeImg() {
    if (this.play == 'Play') {
      (this.play = 'Pause'), (this.videodisabled = false);
    } else {
      (this.play = 'Play'), (this.videodisabled = true);
    }
  }
}
